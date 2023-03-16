import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Auction } from '../../auctions/entities/auction.entity';
import { User } from '../../users/entities/user.entity';
@Entity('bid')
export class Bid {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne((type) => Auction)
  @JoinColumn()
  auction: Auction;
  @ManyToOne((type) => User)
  @JoinColumn()
  user: User;
  @Column()
  value: number;
  @CreateDateColumn()
  createdAt: Date;
}
