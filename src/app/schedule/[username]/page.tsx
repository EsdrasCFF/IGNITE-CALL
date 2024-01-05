import { Container } from "./components/Container";
import { UserHeader } from "./components/UserHeader";
import { dataUser } from "@/actions/schedule-page/user";
import { UserAvatar } from "./components/UserAvatar";

interface ScheduleProps {
  params: {'username': string}
}

export default async function SchedulePage({params}: ScheduleProps) {
  const username = params.username;

  const user = await dataUser(username);

  return (
    <Container>
      <UserHeader>
        
        <UserAvatar src={user?.avatar_url as string}/>
        <h1 className="text-2xl leading-normal mt-2" >{user?.name}</h1>
        <p className="text-gray200" >{user?.bio}</p>
      </UserHeader>
    </Container>
  )
}