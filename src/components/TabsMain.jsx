import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function TabMain({productToShow}) {
    return (
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example "
        className="mb-4 mt-4"
        justify
      >
        <Tab className="tabText" eventKey="desctiption" title="ОПИСАНИЕ">
          {productToShow.desctiption}
        </Tab>
        <Tab className="tabText" eventKey="application" title="ПРИМИНЕНИЕ">
          {productToShow.application}
        </Tab>
        <Tab className="tabText" eventKey="consist" title="СОСТАВ">
          {productToShow.consist}
        </Tab>
      </Tabs>
    );
  }
