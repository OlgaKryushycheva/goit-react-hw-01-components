import user from './profile/user.json';
import { Profile } from './profile/Profile';

import data from './statistics/data.json';
import { Statistics } from './statistics/Statistics';

import friends from './friends/friends.json';
import { FriendList } from './friends/FriendList';

import transactions from './transactions/transactions.json';
import { TransactionHistory } from './transactions/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile item={user} />

      <Statistics title="Upload stats" stats={data} />

      <FriendList items={friends} />

      <TransactionHistory items={transactions} />

      <GlobalStyle />
    </div>
  );
};
