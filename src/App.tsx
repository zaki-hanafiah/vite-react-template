// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ProfileForm } from '@/components/Form.tsx'

function App() {
    return (
        <>
            <h1>Vite + React + shadcn/ui</h1>
            <div className="card">
                <ProfileForm />
            </div>
        </>
    )
}

export default App
