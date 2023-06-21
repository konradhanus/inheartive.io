import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  AfterLoad,
} from 'typeorm';
import { Bid } from '../../bids/entities/bid.entity';
import { Category } from '../../categories/entities/category.entity';
import { User } from '../../users/entities/user.entity';
import { AuctionStatus } from '../auctions.types';
import { IsOptional } from 'class-validator';

@Entity('auction')
export class Auction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  price: number;

  @ManyToOne((type) => Category, (category) => category.auctions)
  category: Category;

  @ManyToOne((type) => User, (user) => user.auctions)
  author: User;

  @Column({ enum: AuctionStatus, type: 'enum', default: AuctionStatus.ACTIVE })
  status: AuctionStatus;

  @Column()
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Bid, (bid) => bid.auction)
  @JoinColumn()
  bids: Bid[];

  @Column({ nullable: true })
  location: string;

  @IsOptional()
  isFinished: boolean;

  @AfterLoad()
  applyFinished() {
    this.isFinished = this.expiresAt.getTime() < new Date().getTime();
  }
}
