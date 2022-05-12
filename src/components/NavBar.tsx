import React from 'react';
import { NavBarData } from './NavBarData';
import Link from "next/link";

export function NavBar(props: { id: string }) {
  const id = props?.id;
  return (
    <ul className='nav-ul'>

{NavBarData.map((item, index) => {
                    return (
                        <li  className='nav-link ' key={index}>
                            <Link href={item.path} as = {item.actualPath.concat(id)}>  
                           <a className ='forward-link'>{item.title.toUpperCase()} </a> 
                            </Link>
                        </li>
                    )
                })}

</ul>
  );
}
