import PropTypes from 'prop-types';
import { TransactionItem } from 'components/transactions/TransactionItem';

import { Table, Head } from 'components/transactions/Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Head>Type</Head>
          <Head>Amount</Head>
          <Head>Currency</Head>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
