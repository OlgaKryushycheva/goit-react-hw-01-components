import PropTypes from 'prop-types';
import { Row, Cell } from 'components/transactions/Transactions.styled';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <Row>
      <Cell>{type}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </Row>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
