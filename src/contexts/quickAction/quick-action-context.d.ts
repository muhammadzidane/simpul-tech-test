interface QuickActionContextProps {
  onClickInboxList: MouseEventHandler<T> | undefined;
  actionType?: "inboxDetail" | "inbox" | "task";
  onClickChangeInboxType: () => void;
  onClickChangeTaskType: () => void;
  onToggleQuickAction: () => void;
  onCloseQuickAction: () => void;
  isToggleQuickAction: boolean;
}
