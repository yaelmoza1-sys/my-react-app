
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
    const profiles = [
        {
            name: "John",
            description: "My best friend",
            type: "Friend",
            avatar: "👨"
        },
        {
            name: "Sarah",
            description: "My programming teacher",
            type: "Teacher",
            avatar: "👩"
        },
        {
            name: "David",
            description: "Computer science student",
            type: "Student",
            avatar: "🧑"
        }
    ];

    return (
        <div>
            <Header />

            <main className="profiles">
                {profiles.map((profile, index) => (
                    <ProfileCard
                        key={index}
                        {...profile}
                    />
                ))}
            </main>

            <Footer />
        </div>
    );
}

export default App;
