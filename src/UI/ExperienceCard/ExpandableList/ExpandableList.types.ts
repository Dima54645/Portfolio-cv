export interface ExpandableListProps {
  title: string;
  items?: string[];
  icon?: React.ReactNode;
  panelId: string;
  expanded: string | false;
  onChange: (
    panel: string
  ) => (_: React.SyntheticEvent, isExpanded: boolean) => void;
}
