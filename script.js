document.addEventListener('DOMContentLoaded', function () {
    const studentList = document.getElementById('student-list');
    const addStudentForm = document.getElementById('add-student-form');
    
    // Array para armazenar os alunos
    let students = [];
  
    // Função para atualizar a tabela
    function updateTable() {
      studentList.innerHTML = '';
      students.forEach((student, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.fee}</td>
          <td class="${student.paid ? 'paid' : 'pending'}">${student.paid ? 'Pago' : 'Pendente'}</td>
          <td><button onclick="markAsPaid(${index})">${student.paid ? 'Cancelar' : 'Pagar'}</button></td>
        `;
        studentList.appendChild(row);
      });
    }
  
    // Função para adicionar aluno
    addStudentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const studentName = document.getElementById('student-name').value;
      const studentFee = document.getElementById('student-fee').value;
  
      students.push({
        name: studentName,
        fee: studentFee,
        paid: false
      });
  
      updateTable();
      addStudentForm.reset();
    });
  
    // Função para marcar como pago
    window.markAsPaid = function(index) {
      students[index].paid = !students[index].paid;
      updateTable();
    }
  });
  