import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Material" options={{ title: "Materiais" }} />
      <Tabs.Screen name="MaoDeObras" options={{ title: "Mão de Obra" }} />
      <Tabs.Screen name="Cronograma" options={{ title: "Cronograma" }} />
    </Tabs>
  );
}
