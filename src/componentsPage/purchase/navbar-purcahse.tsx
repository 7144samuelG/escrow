import {  UserRound } from "lucide-react"

export const NavBarPurchase=()=>{
    return(
        <div className="flex justify-between items-center">
            <h1 className="text-yellow-300 text-3xl font-[900] mb-4">
              Fair<span className="text-yellow-800">Trade</span>
            </h1>
            <div>
                <UserRound/>
            </div>
        </div>
    )
}