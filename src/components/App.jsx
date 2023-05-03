import { GlobalStyle } from 'components/GlobalStyle';
import { StyleApp } from 'components/App.styled';

import user from 'components/profile/user.json';
import { Profile } from 'components/profile/Profile';

import data from 'components/statistics/data.json';
import { Statistics } from 'components/statistics/Statistics';

import friends from 'components/friends/friends.json';
import { FriendList } from 'components/friends/FriendList';

import transactions from 'components/transactions/transactions.json';
import { TransactionHistory } from 'components/transactions/TransactionHistory';

export const App = () => {
  return (
    <StyleApp>
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </StyleApp>
  );
};
