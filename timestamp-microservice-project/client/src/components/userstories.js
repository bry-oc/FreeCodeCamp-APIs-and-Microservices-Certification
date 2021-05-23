import Header from './header.js'

function UserStories(){
    return(
        <div className="container">
            <Header headerTitle="User Stories" />
            <ul>
                <li>user story #1</li>
                <li>user story #2</li>
                <li>user story #3</li>
                <li>user story #4</li>
            </ul>
        </div>
        
    );
}

export default UserStories;