import UserItem from './UserItem';
import data from './data.json';
import Button from './ui/Button';

function App() {
    const user1 = {
        id: '6deb7521cae6e3b247f156cf',
        sex: 'female',
        firstName: 'Zehra',
        lastName: 'Karaböcek',
        fullName: 'Zehra Karaböcek',
        email: 'zehra61@goc.gov.tr',
    };
    const user2 = {
        id: 'fa05bee6adae4c7ffe2e964c',
        sex: 'male',
        firstName: 'Afi',
        lastName: 'Sepetçi',
        fullName: 'Afi Sepetçi',
        email: 'afi81@goc.gov.tr',
    };

    return (
        <div className="App">
            {/*<ul>*/}
            {/*    <UserItem user={user1} />*/}
            {/*    <UserItem user={user2} />*/}
            {/*</ul>*/}

            <Button
                text={'My Text'}
                customClass={'my-class'}
                onPress={() => {
                    alert('Button 1');
                }}
            />
            <Button
                text={'My Text 2'}
                onPress={() => {
                    alert('Button 2');
                }}
            />

            <button onClick={() => alert(1)}>Test</button>
        </div>
    );
}

export default App;
