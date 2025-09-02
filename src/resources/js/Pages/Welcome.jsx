import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link } from '@inertiajs/react';
import Banner from '@/Components/Banner';


export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <main>
            <Head title="Welcome" />
            <div className="bg-gray-900 text-black/50 dark:bg-black dark:text-white/50 mb-auto">
                
                <div >
                    <div className='image-banner'>
                    
                       <Banner />
                    </div>
                    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                        Ambiente desenvolvido por Ericles Alves e João Vitor Candido
                        <br />
                        2025 - Todos os direitos reservados
                        <br />
                        Laravel v{laravelVersion} (PHP v{phpVersion}) 
                    </footer>
                </div>
            </div>
        </main>
    );
}
