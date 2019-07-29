/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.question1.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dkbarks
 */
@Service
public class PersonalDataImp implements IPersonalDataService{
    @Autowired
    private IPersonalDataRepo repo;
    
    @Override
    public PersonalData add(PersonalData p) {
        return repo.save(p);
    }

    
    
    
    
}
