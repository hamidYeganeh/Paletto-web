import * as TabsPrimitive from "@radix-ui/react-tabs"
import { tabsListStyles, tabsTriggerStyles, tabsContentStyles } from "./TabsStyles"

export const Tabs = {
  Root: TabsPrimitive.Root,
  List: ({ className, ...props }: TabsPrimitive.TabsListProps) => (
    <TabsPrimitive.List {...props} className={tabsListStyles({ className })} />
  ),
  Trigger: ({ className, ...props }: TabsPrimitive.TabsTriggerProps) => (
    <TabsPrimitive.Trigger {...props} className={tabsTriggerStyles({ className })} />
  ),
  Content: ({ className, ...props }: TabsPrimitive.TabsContentProps) => (
    <TabsPrimitive.Content {...props} className={tabsContentStyles({ className })} />
  )
}