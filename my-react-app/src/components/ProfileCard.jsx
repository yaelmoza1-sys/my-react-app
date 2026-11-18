
import Button from "./Button";

function ProfileCard({ name, description, type, avatar }) {
    return (
        <div className="profile-card">
            <div className="avatar">{avatar}</div>

            <h2>{name}</h2>

            <p>{description}</p>

            <Button type={type} />
        </div>
    );
}

export default ProfileCard;
