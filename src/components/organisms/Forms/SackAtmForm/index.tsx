import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Typograph } from 'components/atoms';
import { useAtmListProvider } from 'contexts/atms/AtmsProvider';
import { useAuthProvider } from 'contexts/auth/AuthProvider';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { createMovementService } from 'services/movement/createMovement';
import { object, SchemaOf, string } from 'yup';
import { IAtmRegisterForm, ResquestYourCardFormProps } from './interfaces';
import * as S from './styles';

const SackAtmForm: FC<ResquestYourCardFormProps> = ({ className }) => {
  const { atmSelected } = useAtmListProvider();
  const { loggedCustomer } = useAuthProvider();

  const defaultValues: IAtmRegisterForm = {
    value: '',
  };

  const validationSchema: SchemaOf<IAtmRegisterForm> = object().shape({
    value: string().min(2, 'Deve ser pelomenos 10 reais').required('Este campo é obrigatório'),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = useForm<IAtmRegisterForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IAtmRegisterForm> = async (data) => {
    const { value } = data;

    await createMovementService({
      value: Number(value),
      atmId: atmSelected?.id ?? '',
      customerId: loggedCustomer?.id ?? '',
    })
      .then((response) => {
        console.log('response', response);

        reset();
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <>
      <S.FormContainer className={className} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="value"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Valor"
              onlyNumber
              maxLength={5}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.value?.message}
              textError={errors.value?.message}
              placeholder="Minímo R$ 10"
              autoCapitalize="none"
              autoComplete="off"
              inputMode="numeric"
            />
          )}
        />
        <S.Button type="submit" disabled={!isValid}>
          <Typograph
            type="headingsH3Medium"
            color={isValid ? 'gray100' : 'gray600'}
            cursor="pointer"
            textAlign="center"
          >
            SACAR
          </Typograph>
        </S.Button>
      </S.FormContainer>
    </>
  );
};

export default SackAtmForm;
