import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Typograph } from 'components/atoms';
import { useModalProvider } from 'contexts/modal/ModalProvider';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { customerRegisterService } from 'services/customer/register';
import { routerPaths } from 'utils/constants/routes';
import { object, SchemaOf, string } from 'yup';
import { CustomerRegisterFormProps, ICustomerRegisterForm } from './interfaces';
import * as S from './styles';

const CustomerRegisterForm: FC<CustomerRegisterFormProps> = ({ className }) => {
  const { setModal } = useModalProvider();
  const router = useRouter();

  const defaultValues: ICustomerRegisterForm = {
    fisrtName: '',
    lastName: '',
    cpf: '',
    email: '',
    balance: '',
  };

  const validationSchema: SchemaOf<ICustomerRegisterForm> = object().shape({
    fisrtName: string().min(2, 'O nome deve ter pelo menos 2 caracteres').required('Este campo é obrigatório'),
    lastName: string().min(2, 'O sobrenome deve ter pelo menos 2 caracteres').required('Este campo é obrigatório'),
    cpf: string().min(11, 'O cpf deve ter pelo menos 11 caracteres').required('Este campo é obrigatório'),
    email: string().email('Deve ser um email válido').required('Este campo é obrigatório'),
    balance: string().required('Este campo é obrigatório'),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = useForm<ICustomerRegisterForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ICustomerRegisterForm> = async (data) => {
    const { balance, cpf, email, fisrtName, lastName } = data;

    await customerRegisterService({
      cpf,
      email,
      balance: Number(balance),
      fisrt_name: fisrtName,
      last_name: lastName,
    })
      .then(() => {
        setModal({
          show: true,
          title: 'Sucesso',
          paragraph: 'Cliente cadastrado com sucesso',
          onClick: () => router.push(routerPaths.login.default),
        });
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
          name="fisrtName"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Nome"
              onlyCharacter
              maxLength={30}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.fisrtName?.message}
              textError={errors.fisrtName?.message}
              placeholder="Ex: Fábio"
              autoCapitalize="none"
              autoComplete="off"
              inputMode="text"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="Sobrenome"
              onlyCharacter
              maxLength={30}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.lastName?.message}
              textError={errors.lastName?.message}
              placeholder="Ex: Santos da Silva"
              autoCapitalize="none"
              autoComplete="off"
              inputMode="text"
            />
          )}
        />
        <Controller
          name="cpf"
          control={control}
          render={({ field: { onChange, onBlur, name } }) => (
            <Input
              label="CPF"
              onlyNumber
              maxLength={11}
              {...register}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.cpf?.message}
              textError={errors.cpf?.message}
              placeholder="cpf"
              autoCapitalize="none"
              autoComplete="off"
              inputMode="numeric"
            />
          )}
        />
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
        <Controller
          name="balance"
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
              error={errors.balance?.message}
              textError={errors.balance?.message}
              placeholder="Recomendado: 1000"
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

export default CustomerRegisterForm;
