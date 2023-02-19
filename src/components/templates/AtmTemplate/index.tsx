import { Typograph } from 'components/atoms';
import { useAuthProvider } from 'contexts/auth/AuthProvider';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { IAtmTemplateProps } from './interfaces';
import * as S from './styles';

const AtmTemplate: FC<IAtmTemplateProps> = ({ className, variant, title, children, ...props }) => {
  const router = useRouter();
  const { logout } = useAuthProvider();

  return (
    <S.AtmTemplateContainer className={className} bgImage="/assets/images/atm-bg.jpg" {...props}>
      <S.AtmTemplateContent>
        {variant !== 'primary' && (
          <S.AtmTemplateHeader>
            {(variant === 'secondary' || variant === 'quarteary') && (
              <S.AtmTemplateBackButton onClick={() => router.back()}>
                <Image
                  src="/assets/images/arrow-left.jpg"
                  width={20}
                  height={20}
                  alt="arrow-left"
                  quality="100"
                  priority
                />
                <Typograph type="headingsH3Medium" color="gray700">
                  Voltar
                </Typograph>
              </S.AtmTemplateBackButton>
            )}
            {title && (
              <S.TextTitle type="headingsH3Medium" color="gray700" textAlign="center">
                {title}
              </S.TextTitle>
            )}
            {(variant === 'secondary' || variant === 'tertiary') && (
              <S.AtmTemplateLogoutButton onClick={() => logout()}>
                <Typograph type="headingsH3Medium" color="gray700">
                  Sair
                </Typograph>
              </S.AtmTemplateLogoutButton>
            )}
          </S.AtmTemplateHeader>
        )}
        {children}
      </S.AtmTemplateContent>
    </S.AtmTemplateContainer>
  );
};

export default AtmTemplate;
