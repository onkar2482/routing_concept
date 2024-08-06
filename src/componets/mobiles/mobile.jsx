import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Mobile() {
    const [mobiles, setMobiles] = useState([
        { Name: "Realme c16", category: "realme" },
        { Name: "Iphone 14 pro max", category: "iphone" }
    ]);
    let params = useParams();

    return (
        <div>
            <h4>Mobiles{params.category}</h4>
            <table width="400" border="1">
                <thead>
                    
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mobiles
                            .filter(mobile => mobile.category === params.category)
                            .map(item => (
                                <tr key={item.Name}>
                                    <td>{item.Name}</td>
                                    <td>{item.category}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    );
}
