package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Domain.Order;
import edu.kits.finalproject.Domain.User;
import edu.kits.finalproject.Model.*;
import edu.kits.finalproject.Repository.UserRepository;
import edu.kits.finalproject.Service.CategoryService;
import edu.kits.finalproject.Service.CourseService;
import edu.kits.finalproject.Service.OrderService;
import edu.kits.finalproject.Service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@org.springframework.stereotype.Controller
@RequestMapping("admin")
public class Controller {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private CourseService courseService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;



    @GetMapping("/courses")
    @ResponseBody
    public List<CourseDto> getAllCourses(){
        return courseService.getAllCourses().stream().map(Course -> modelMapper.map(Course, CourseDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/courses/{id}")
    @ResponseBody
    public CourseDto getCourseById(@PathVariable(name = "id") Long id){
        return modelMapper.map(courseService.getCourseById(id), CourseDto.class);
    }


    @GetMapping("/categoties")
    @ResponseBody
    public List<CategoryDto> getAllCategory(){
        return categoryService.getAllCategory().stream().map(Category -> modelMapper.map(Category, CategoryDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping("/add-course")
    public ResponseEntity<ResponseDto> addCourse(@RequestParam("file") MultipartFile file, @RequestParam("name") String name){
        String message = "";
        try{
            courseService.store(name, 10, "new course", file, 0, 0,"hello");
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(message));
        }catch (Exception e){
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseDto(message));
        }
    }

    @GetMapping("/get-tutor-from-course/{id}")
    @ResponseBody
    public UserDto getUserOwnTheCourse(@PathVariable(name = "id") Long id) {
        Course course = courseService.getCourseById(id);
        List<User> users = course.getUsers();
        User user = users.get(0);
        return modelMapper.map(user, UserDto.class);
    }

}
