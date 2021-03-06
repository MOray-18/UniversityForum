package com.app.service;

import java.util.List;

import com.app.pojos.Answer;

public interface IAnswerService {

	List<Answer> fetchAnswerForQuestion(int qId);

	Answer addAnswer(Answer ans);

	String deleteAnswer(int id);
	
	List<Answer> fetchReportedAnswers();
	
	Answer removeReport(Answer answer);
	
	Answer addReport(Answer ans);

}
