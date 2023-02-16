import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Typograph } from 'components/atoms';
import { useModalProvider } from 'contexts/modal/ModalProvider';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { atmRegisterService } from 'services/atm/register';
import { object, SchemaOf, string } from 'yup';
import { AtmRegisterFormProps, IAtmRegisterForm } from './interfaces';
import * as S from './styles';

const AtmRegisterForm: FC<AtmRegisterFormProps> = ({ className }) => {
  const { setModal } = useModalProvider();

  const defaultValues: IAtmRegisterForm = {
    identification: '',
    qtdFiftyBill: '',
    qtdHundredBill: '',
    qtdTenBill: '',
    qtdTwentyBill: '',
  };

  const validationSchema: SchemaOf<IAtmRegisterForm> = object().shape({
    identification: string()
      .min(3, 'A identificação deve ter pelo menos 3 caracteres')
      .required('Este campo é obrigatório'),
    qtdTenBill: string().min(3, 'Deve ter pelomenos 100 unidades dessa nota').required('Este campo é obrigatório'),
    qtdTwentyBill: string().min(3, 'Deve ter pelomenos 100 unidades dessa nota').required('Este campo é obrigatório'),
    qtdFiftyBill: string().min(3, 'Deve ter pelomenos 100 unidades dessa nota').required('Este campo é obrigatório'),
    qtdHundredBill: string().min(3, 'Deve ter pelomenos 100 unidades dessa nota').required('Este campo é obrigatório'),
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
    const { identification, qtdFiftyBill, qtdHundredBill, qtdTenBill, qtdTwentyBill } = data;

    await atmRegisterService({
      identification,
      qtd_ten_bill: Number(qtdTenBill),
      qtd_twenty_bill: Number(qtdTwentyBill),
      qtd_fifty_bill: Number(qtdFiftyBill),
      qtd_hundred_bill: Number(qtdHundredBill),
    })
      .then(() => {
        setModal({
          show: true,
          title: 'Sucesso',
          paragraph: 'ATM Criado com sucesso',
        });

        reset();
      })
      .catch((error) => {
        setModal({
          show: true,
          title: 'Erro',
          paragraph: JSON.stringify(error?.response?.data?.message),
        });
      });
  };

  return (
    <>
      <S.FormContainer className={className} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="identification"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Identificação"
              onlyCharacter
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.identification?.message}
              textError={errors.identification?.message}
              placeholder="Ex: 'ATM Shopping JK'"
              autoCapitalize="none"
              autoComplete="off"
            />
          )}
        />
        <Controller
          name="qtdTenBill"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Notas de 10"
              onlyNumber
              maxLength={5}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.qtdTenBill?.message}
              textError={errors.qtdTenBill?.message}
              placeholder="Recomendado: 2000"
              autoCapitalize="none"
              autoComplete="off"
              inputMode="numeric"
            />
          )}
        />
        <Controller
          name="qtdTwentyBill"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Notas de 20"
              onlyNumber
              maxLength={5}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.qtdTwentyBill?.message}
              textError={errors.qtdTwentyBill?.message}
              placeholder="Recomendado: 1000"
              autoCapitalize="none"
              autoComplete="off"
              inputMode="numeric"
            />
          )}
        />
        <Controller
          name="qtdFiftyBill"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Notas de 50"
              onlyNumber
              maxLength={5}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.qtdFiftyBill?.message}
              textError={errors.qtdFiftyBill?.message}
              placeholder="Recomendado: 400"
              autoCapitalize="none"
              autoComplete="off"
              inputMode="numeric"
            />
          )}
        />
        <Controller
          name="qtdHundredBill"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Notas de 100"
              onlyNumber
              maxLength={5}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.qtdHundredBill?.message}
              textError={errors.qtdHundredBill?.message}
              placeholder="Recomendado: 200"
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
            ENVIAR
          </Typograph>
        </S.Button>
      </S.FormContainer>
    </>
  );
};

export default AtmRegisterForm;
