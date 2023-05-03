import PropTypes from 'prop-types';
import { TransactionItem } from 'components/transactions/TransactionItem';

import { Table, Head, Row } from 'components/transactions/Transactions.styled';

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
          <Row key={item.id}>
            <TransactionItem item={item} />
          </Row>
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
