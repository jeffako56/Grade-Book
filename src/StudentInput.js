import React, { useCallback, useEffect, useState } from "react";
import Modal from "./Modal";
import StudentList from "./StudentList";

export default function StudentInput() {
  const initialValue = [
    { name: "Jeffreson Salvador", grade: "90", subject: "Math" },
    { name: "Roy Agapito", grade: "89", subject: "Science" },
    { name: "Dino Villarin", grade: "88", subject: "English" },
  ];

  const [studentList, setStudentList] = useState(initialValue);
  const [grade, setGrade] = useState();
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [ave, setAve] = useState(0);
  const [isModal, setModal] = useState(false);

  let hasError = false;
  if (!hasError && !name) {
    hasError = true;
  }

  if (!hasError && !grade) {
    hasError = true;
  }
  if (!hasError && !subject) {
    hasError = true;
  }

  useEffect(() => {
    console.log("GGGGG:" + ave);
  }, [ave]);

  const totalAve = () => {
    let sum = studentList.reduce(function (prev, current) {
      return prev + +current.grade;
    }, 0);
    setAve(sum / studentList.length);
  };

  const toggle = useCallback(() => {
    setModal((v) => !v);

    console.log(isModal);
  }, [isModal]);

  return (
    <div>
      {isModal && <Modal averageTotal={ave} toggle={toggle} />}

      <div className="p-3 ml-5 font-bold text-2xl"> Enter Student Info</div>
      <div className="flex flex-col">
        <div className="flex flex-row p-4 ml-5">
          <input
            className="p-3 m-3"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            pattern="[0-9]"
            className="p-3 m-3"
            type="text"
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />

          <input
            className="p-3 m-3"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <button
            disabled={hasError}
            className="bg-blue-800 p-3 text-white m-3"
            onClick={() => {
              setStudentList([
                ...studentList,
                { name: name, grade: grade, subject: subject },
              ]);
              setName("");
              setGrade("");
              setSubject("");
            }}
          >
            Add Student
          </button>
        </div>
        <div className="w-screen">
          {hasError && (
            <text className="relative ml-3 left-10 bottom-5 text-red-500 text-lg font-bold">
              *Please Complete Details
            </text>
          )}
        </div>
      </div>

      <StudentList class="card bg-indigo-400 ..." lists={studentList} />

      <button
        onClick={() => {
          totalAve();
          toggle();
        }}
        className="bg-blue-800 p-3 text-white ml-10 w-1/2 font-bold"
      >
        Class Average
      </button>
      <button
        onClick={() => {
          setStudentList([]);
        }}
        className="bg-red-200 p-3 text-blue-600 ml-10 w-1/2 mt-3 font-bold"
      >
        Clear Records
      </button>
    </div>
  );
}
