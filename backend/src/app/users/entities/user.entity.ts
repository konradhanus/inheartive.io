import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Auction } from '../../auctions/entities/auction.entity';
import { Exclude } from 'class-transformer';

@Entity('user')
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  initials: string;

  @Column()
  @Exclude()
  password: string;

  @JoinTable()
  @OneToMany((type) => Auction, (auction) => auction.author)
  auctions: Auction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: false })
  @Exclude()
  salt: string;
}
