import React from "react"
import styled from 'styled-components'
import {NavWrapper} from '../../elements'
import Burger from './Burger'
import { Link, graphql, useStaticQuery } from 'gatsby';

export const Navbar = () => {
    return  <NavWrapper>
            <div className="logo">
                <Link to ="/">Jim Colby</Link>
            </div>
            <Burger/>
           
        
        </NavWrapper>
        
  }