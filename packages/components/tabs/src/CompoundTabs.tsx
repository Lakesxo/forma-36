import { Tabs as OriginalTabs } from './Tabs';
import { TabPanel } from './TabPanel';
import { Tab } from './Tab';
import { TabList } from './TabList';

type CompoundTabs = typeof OriginalTabs & {
  Panel: typeof TabPanel;
  Tab: typeof Tab;
  List: typeof TabList;
};

export const Tabs = OriginalTabs as CompoundTabs;
Tabs.Panel = TabPanel;
Tabs.Tab = Tab;
Tabs.List = TabList;
