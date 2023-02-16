import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Typograph } from 'components/atoms';
import { useAuthProvider } from 'contexts/auth/AuthProvider';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';
import { IAtmRegisterForm, LoginFormProps } from './interfaces';
import * as S from './styles';

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { login } = useAuthProvider();

  const defaultValues: IAtmRegisterForm = {
    email: '',
  };

  const validationSchema: SchemaOf<IAtmRegisterForm> = object().shape({
    email: string().email('Deve ser um email válido').required('Este campo é obrigatório'),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = useForm<IAtmRegisterForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IAtmRegisterForm> = async (data) => {
    const { email } = data;

    await login({ email });
  };

  return (
    <>
      <S.FormContainer className={className} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Email"
              maxLength={30}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.email?.message}
              textError={errors.email?.message}
              placeholder="seu@email.com"
              autoCapitalize="none"
              autoComplete="off"
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
            ACESSAR
          </Typograph>
        </S.Button>
      </S.FormContainer>
    </>
  );
};

export default LoginForm;
