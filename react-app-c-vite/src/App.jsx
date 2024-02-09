import { TwitterFollowCard } from './components/TwitterFollowCard';


//<article style={{display : 'flex', alignItems : 'center', color : '#fff'}}>
export function App() {
  //<> is a react fragment (Elemento de fragmento de React) that allows you to return multiple elements without having to wrap them in a div or other element.
  const formatUserName = (userName) => `@${userName}`;
  const objUser = {
    userName : 'midudev',
    name : 'Miguel Angel Duran',
    isFollowing : true,
    formatUserName : formatUserName
  };
  return (
    <section> 
      <TwitterFollowCard
        userName={'reactjs'}
        name='React' 
        isFollow
        formatUserName={formatUserName}
      />
      <TwitterFollowCard 
        userName='elonmusk' 
        name='Dan Abramov' 
        isFollow = {true} 
        formatUserName={formatUserName}
      />
      <TwitterFollowCard
        userName='midudev'
        name='Sophie Alpert'
        isFollow = {false} 
        formatUserName={formatUserName}
      />
      <TwitterFollowCard {...objUser}/>
    </section>
  );
}