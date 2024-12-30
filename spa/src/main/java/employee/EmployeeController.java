package employee;

import com.spring.spa.repository.EmployeeRepository;
import model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@RestController
//@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200/")
public class EmployeeController {
        @Autowired
        private EmployeeRepository employeeRepository;

        //Get all Employees
        @GetMapping("/api/v1/employees")
        public List<Employee> getAllEmployee(){

            return employeeRepository.findAll();
        }

        //create employees
        @PostMapping("/api/v1/employees")
        public Employee createEmployee(@RequestBody Employee employee)
        {
            return employeeRepository.save(employee);
        }

        //get employee by employee name
        @GetMapping("/api/v1/employees/{id}")
        public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
            Employee employee = employeeRepository.findById(id)
                    .orElseThrow();
            return ResponseEntity.ok(employee);

        }

        //update employee rest api
        @PutMapping("/api/v1/employees/{id}")
        public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
            Employee employee = employeeRepository.findById(id)
                    .orElseThrow();
            employee.setFirstName(employeeDetails.getFirstName());
            employee.setLastName(employeeDetails.getLastName());
            employee.setEmailId(employeeDetails.getEmailId());

            Employee updatedEmployee = employeeRepository.save(employee);
            return ResponseEntity.ok(updatedEmployee);
        }

        //delete employee rest api
        @DeleteMapping("/api/v1/employees/{id}")
        public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
            Employee employee = employeeRepository.findById(id)
                    .orElseThrow();
            employeeRepository.delete(employee);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        }
}
