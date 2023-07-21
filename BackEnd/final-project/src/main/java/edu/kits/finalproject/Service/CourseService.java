package edu.kits.finalproject.Service;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Domain.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface CourseService{

    List<Course> getAllCourses();

    Course getCourseById(Long id);


    Course store(String name, double price, String description, MultipartFile file, double rating, int enroll, String listOfVideo) throws IOException;

    User getTutor(Long id);
}
