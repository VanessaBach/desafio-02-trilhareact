interface SideBarProps{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props: SideBarProps) {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.name}</p>
      <p>{props.name}</p>
      <p>{props.name}</p>
      <p>{props.name}</p>
      <p>{props.name}</p>
    </li>
  );
}