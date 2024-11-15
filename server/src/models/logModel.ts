import { Timestamp, DocumentReference } from 'firebase/firestore'

export interface Log {
  userId: DocumentReference;
  foodId: DocumentReference;
  timestamp: Timestamp;
}
