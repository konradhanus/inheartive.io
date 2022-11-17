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

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @JoinTable()
  @OneToMany((type) => Auction, (auction) => auction.category)
  auctions: Auction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  upodatedAt: Date;
}
