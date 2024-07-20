import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from 'react-redux';

const Bag = () => {

  const bagItems = useSelector(store => store.bag);
  const items = useSelector(store => store.items);
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  })

  return ( 
    <main>
      <div className="bag-page">
        {finalItems.map(item => <BagItem item={item}/>)}
        <BagSummary/>
      </div>
    </main>
  );
};

export default Bag;
