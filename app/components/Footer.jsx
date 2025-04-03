export default function Footer(){
    return(
        <footer>
            
        <div className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Relationship-Harmony.com. All rights reserved.
            </p>
            <div className="flex space-x-4">
            <a href="/privacy-policy" className="text-gray-600 hover:text-rose-600 text-sm transition">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 hover:text-rose-600 text-sm transition">Terms of Service</a>
            </div>
        </div>
        </div>

           
        </footer>
    )
}