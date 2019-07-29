/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.question1.backend;

import org.springframework.data.repository.Repository;

/**
 *
 * @author dkbarks
 */
public interface IPersonalDataRepo extends Repository<PersonalData, Integer>{
    
    PersonalData save(PersonalData p);
    
    
}
