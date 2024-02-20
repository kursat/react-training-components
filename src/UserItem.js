const UserItem = (props) => {
    return (
        <li className="border-1 p-2">
            <pre>{JSON.stringify(props, null, 2)}</pre>

            <div className="m-2 bg-blue-300">{props.user.id}</div>
            <div className="m-2 bg-red-200">
                {props.user.firstName} {props.user.lastName}
            </div>
            <div className="m-2 bg-blue-300">{props.user.email}</div>
        </li>
    );
};

export default UserItem;
