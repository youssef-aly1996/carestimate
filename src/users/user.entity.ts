import { Report } from './../reports/report.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity('users', { schema: 'public' })
@Unique('users', ['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  admin: boolean;
  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];
}
