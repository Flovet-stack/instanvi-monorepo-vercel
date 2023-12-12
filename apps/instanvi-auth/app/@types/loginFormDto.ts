import { AuthDto } from '@instanvi/client';

export interface ILoginFormData extends AuthDto {
  remember?: boolean;
}
