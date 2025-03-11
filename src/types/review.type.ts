export interface IReview {
  _id: string;
  review: string;
  foodCart: string;
  user: {
    _id: string;
    name: string;
    photo: string;
  };
  isFlagged: boolean;
  flaggedReason: string;
  isVerifiedPurchase: boolean;
  createdAt: string;
  updatedAt: string;
}
