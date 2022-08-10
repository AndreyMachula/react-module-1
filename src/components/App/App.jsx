
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import { Button } from 'components/Button/Button';
import upcomingEvents from 'upcoming-events.json';
// import {Container} from './App.styled'
import { HiEmojiHappy, HiEmojiSad } from 'react-icons/hi';
import {Box} from 'components/Box/Box'


function App() {
  return (
    <Box bg="lightColor">
      <PageTitle text="24th Core Worlds Coalition Conference"/>
      <EventBoard events={upcomingEvents}/>
      <Button icon={HiEmojiHappy}>Search</Button>
      <Button type="submit" disabled icon={HiEmojiSad}>LogIn</Button>
    </Box>
  );
}

export default App;
