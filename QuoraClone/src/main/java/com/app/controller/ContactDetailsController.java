package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.ContactDetails;
import com.app.service.IContactDetailsService;

@RestController
@RequestMapping("/contacts")
public class ContactDetailsController {

	public ContactDetailsController() {
		System.out.println("in the constr- " + getClass().getName());
	}

	@Autowired
	private IContactDetailsService contactDetailsService;

	// get contact details by user or contact id
	@GetMapping("/{id}")
	public ResponseEntity<?> fetchContactDetails(@PathVariable int id) {
		return new ResponseEntity<>(contactDetailsService.fetchContactDetails(id), HttpStatus.OK);
	}

	// get all contact details
	@GetMapping("/")
	public ResponseEntity<?> fetchAllContactDetails() {
		List<ContactDetails> contacts = contactDetailsService.fetchAllContactDetails();
		
		return new ResponseEntity<>(contacts, HttpStatus.OK);
	}

	@PostMapping("/{id}")
	public ResponseEntity<?> addContactDetails(@RequestBody ContactDetails details, @PathVariable int id) {

		return new ResponseEntity<>(contactDetailsService.saveContactDetails(details, id), HttpStatus.OK);
	}

	@PutMapping("/")
	public ResponseEntity<?> updateContactDetails(@RequestBody ContactDetails details) {
		
		ContactDetails c = contactDetailsService.updateContactDetails(details);
		
		return new ResponseEntity<>(c, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public  ResponseEntity<?> deleteContactDetails(@PathVariable int id) {
		return new ResponseEntity<>(contactDetailsService.deleteContactDetails(id), HttpStatus.OK);
	}
}
