import { StyleApp } from 'components/App/App.styled';

// import user from 'components/profile/user.json';
import user from 'data/user.json';
import { Profile } from 'components/profile/Profile';

import data from 'data/data.json';
import { Statistics } from 'components/statistics/Statistics';

import friends from 'data/friends.json';
import { FriendList } from 'components/friends/FriendList';

import transactions from 'data/transactions.json';
import { TransactionHistory } from 'components/transactions/TransactionHistory';

export const App = () => {
  return (
    <StyleApp>
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </StyleApp>
  );
};
