import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="password">For you</TabsTrigger>
        <TabsTrigger value="account">Following</TabsTrigger>
      </TabsList>
      <TabsContent value="account"></TabsContent>
    </Tabs>
  );
}
