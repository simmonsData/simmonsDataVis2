export default {
    title: "Engineering Out-Of-Class Activity Survey",
    pages: [
        {
            name: "consentPage",
            elements: [
                {
                    type: "panel",
                    name: "panel3",
                    elements: [
                        {
                            type: "html",
                            name: "consentText",
                            html: "<p>Study Title: Investigating Co-Curricular Participation of Students Underrepresented in Engineering</p>\n\n\n<p>Researchers: Anh Chau</p>\n<h4><u>Consent Information and Directions</u></h4><p>Do you participate in any activities? If so, I would like to know more about these activities. You are invited to participate in a research study that seeks to learn about students’ experiences from participating in various activities, called co/extracurricular activities, which occur outside of taking courses.</p><h4><u>Consent Information</u></h4><p>The information you provide will be used to help college and university administrators and faculty improve out of class experiences and students' ability to benefit from such experiences. It may also identify links between participation in out of class activities and commitment to engineering majors and careers.</p><p>It should take about 20 minutes to complete the survey. Persons who complete the survey will be entered into a drawing for ten (10) $25 Amazon gift cards. The odds of winning are 1 in 200.  To enter the drawing, please add your name and contact information at the end of the survey.  You are not required to enter the drawing.</p><p>There are no right or wrong answers. However, please choose your response options carefully. There are no known risks to study participants. Your responses will remain confidential. You are free to discontinue this survey at any time without  any consequences. You should be over 18 to be eligible to participate in this study. Completion of this online questionnaire will be considered as your consent to participate in this study and permission to use your data for the purposes of the study specified above.</p><p>Any questions concerning this study should be directed to Dr. Denise R. Simmons at densimm@vt.edu or (540) 553-6013. The Institutional Review Board (IRB) at Virginia Tech (VT) has approved this study. Should you have any questions or concerns about the study’s conduct or your rights as a research subject, or need to report a research-related injury or event, you may contact the VT IRB Chair, Dr. David M. Moore atmoored@vt.edu or (540) 231-4991.</p><h5><u>Directions:</u></h5><p>(1) You can use the back button to move Back and forth between pages.</p><p>(2) Hovering over words in <font color=\"blue\">blue ink</font> will display text, specifically examples of out-of-classroom activities and outcomes.</p><p><strong>(3) Clicking \"agree\" below indicates that:\n</strong>\n</p>\n<p><b>- you voluntarily agree to participate</b></p>\n<p><b>- you are at least 18 years of age</b></p>\n\n<p><b>If you do not wish to participate in the study, please decline by clicking the \"disagree\" button. </b></p><p></p>"
                        },
                        {
                            type: "dropdown",
                            name: "consentQuestion",
                            isRequired: true,
                            titleLocation: "hidden",
                            choices: [
                                {
                                    value: "agree",
                                    text: "Agree"
                                },
                                {
                                    value: "disagree",
                                    text: "Disagree"
                                }
                            ]
                        }
                    ]
                }
            ],
            navigationButtonsVisibility: "show"
        },
        {
            name: "pageAge",
            elements: [
                {
                    type: "panel",
                    name: "agePanel",
                    elements: [
                        {
                            type: "text",
                            name: "demoAge",
                            title: "Age",
                            isRequired: true,
                            inputType: "number",
                            placeHolder: "Enter your age here"
                        }
                    ],
                }]
        },
        {
            name: "page1",
            elements: [
                {
                    type: "panel",
                    name: "demographicsPanel",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "gender",
                            title: "What gender do you most identify with?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Man"
                                },
                                {
                                    value: "2",
                                    text: "Woman"
                                },
                                {
                                    value: "3",
                                    text: "Trans"
                                },
                                {
                                    value: "4",
                                    text: "Other (please fill in below)"
                                },
                                {
                                    value: "5",
                                    text: "I don't want to respond."
                                }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "ethnicity",
                            title: "What is your race/ethnicity? (check all that apply.)",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "White"
                                },
                                {
                                    value: "2",
                                    text: "American Indian or Alaskan Native"
                                },
                                {
                                    value: "3",
                                    text: "Asian"
                                },
                                {
                                    value: "4",
                                    text: "Black or African American"
                                },
                                {
                                    value: "5",
                                    text: "Hispanic, Latino or Spanish Origin"
                                },
                                {
                                    value: "6",
                                    text: "Native Hawaiian or Other Pacific Islander"
                                },
                                {
                                    value: "7",
                                    text: "Some other race, ethnicity, or origin (please specify)"
                                }
                            ],
                            optionsCaption: "Select your Race/Ethnicity here"
                        }
                    ],
                    title: "General"
                }
            ]
        },


        {
            name: "page2",
            elements: [
                {
                    type: "panel",
                    name: "collegePanel",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "institution",
                            title: "What is the name of your institution?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Georgia Tech"
                                },
                                {
                                    value: "2",
                                    text: "North Carolina State University"
                                },
                                {
                                    value: "3",
                                    text: "Tennessee State University"
                                },
                                {
                                    value: "4",
                                    text: "The University of Texas Rio Grande Valley / University of Texas-Pan America"
                                },
                                {
                                    value: "5",
                                    text: "Virginia Tech"
                                },
                                {
                                    value: "6",
                                    text: "Other (please specify)"
                                }
                            ],
                        },
                        {
                            type: "radiogroup",
                            name: "enrollStatus",
                            title: "What is your enrollment status as a student?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Full-time"
                                },
                                {
                                    value: "2",
                                    text: "Part-time"
                                }
                            ],
                            optionsCaption: "Select your enrollment status here"
                        },
                        {
                            type: "radiogroup",
                            name: "collegeYear",
                            title: "What year in college are you?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "First Year"
                                },
                                {
                                    value: "2",
                                    text: "Sophomore Year"
                                },
                                {
                                    value: "3",
                                    text: "Junior Year"
                                },
                                {
                                    value: "4",
                                    text: "Senior Year"
                                },
                                {
                                    value: "5",
                                    text: "Fifth year and beyond"
                                },
                                {
                                    value: "6",
                                    text: "Graduate student"
                                }
                            ],
                            optionsCaption: "Select your year here"
                        },

                        {
                            type: "radiogroup",
                            name: "beforeFirstSemester",
                            title: "Where were you immediately before your first semester/term at this institution?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "High school"
                                },
                                {
                                    value: "2",
                                    text: "Two-year college, vocational/technical school"
                                },
                                {
                                    value: "3",
                                    text: "Four-year college"
                                },
                                {
                                    value: "4",
                                    text: "Military"
                                },
                                {
                                    value: "5",
                                    text: "Working a full-time job (worked more than just the summer between high school and college -- more than 8 months)"
                                },
                                {
                                    value: "6",
                                    text: "Other (please specify)"
                                }
                            ],
                            optionsCaption: "Where were you immediately before your first semester/term at this institution? "
                        }
                    ],
                }]
        },

        {
            name: "page3",
            elements: [
                {
                    type: "panel",
                    name: "agePanel",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "major",
                            title: "What is your major?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Science"
                                },
                                {
                                    value: "2",
                                    text: "Technology"
                                },
                                {
                                    value: "3",
                                    text: "Engineering or construction"
                                },
                                {
                                    value: "4",
                                    text: "Mathematics"
                                },
                                {
                                    value: "5",
                                    text: "Non-STEM"
                                }
                            ],
                            optionsCaption: "What is your specific major in engineering or construction?"
                        },
                        {
                            type: "radiogroup",
                            name: "field",
                            title: "What is your major?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "General Engineering"
                                },
                                {
                                    value: "2",
                                    text: "Civil Engineering"
                                },
                                {
                                    value: "3",
                                    text: "Construction"
                                },
                                {
                                    value: "4",
                                    text: "Agricultural Engineering"
                                },
                                {
                                    value: "5",
                                    text: "Applied Engineering"
                                },
                                {
                                    value: "6",
                                    text: "Biomedical Engineering"
                                },
                                {
                                    value: "7",
                                    text: "Chemical Engineering"
                                },
                                {
                                    value: "8",
                                    text: "Electrical Engineering"
                                },
                                {
                                    value: "9",
                                    text: "Engineering Management"
                                },
                                {
                                    value: "10",
                                    text: "Engineering Physics"
                                },
                                {
                                    value: "11",
                                    text: "Engineering Science"
                                },
                                {
                                    value: "12",
                                    text: "Industrial Engineering"
                                },
                                {
                                    value: "13",
                                    text: "Materials Engineering"
                                },
                                {
                                    value: "14",
                                    text: "Mechanical Engineering"
                                },
                                {
                                    value: "15",
                                    text: "Nanoengineering"
                                },
                                {
                                    value: "16",
                                    text: "Nuclear Engineering"
                                },
                                {
                                    value: "17",
                                    text: "Other"
                                }
                            ],
                            optionsCaption: "Select your major here"
                        }
                    ],
                    title: "College",
                    isRequired: true
                }
            ]
        },
        {
            name: "page4",
            elements: [
                {
                    type: "panel",
                    name: "switchPanel",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "switchFromStem",
                            title: "Did you switch to your current major from another one?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Yes, from a STEM major"
                                },
                                {
                                    value: "2",
                                    text: "Yes, from a non-STEM major"
                                },
                                {
                                    value: "3",
                                    text: "No"
                                }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "intendToSwitch",
                            title: "Do you intend to switch your current major to another one?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Yes"
                                },
                                {
                                    value: "2",
                                    text: "No"
                                }
                            ],
                            optionsCaption: "Where were you immediately before your first semester/term at this institution? "
                        },
                        {
                            type: "radiogroup",
                            name: "intendedMajor",
                            title: "What major do you intend to switch to?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Engineering"
                                },
                                {
                                    value: "2",
                                    text: "Non-Engineering"
                                }
                            ]
                        }
                    ],
                }]
        },
        // end of page 3

        {
            name: "page4",
            elements: [
                {
                    type: "radiogroup",
                    name: "involvedInActivity",
                    title: "Have you been involved in any out-of-classroom activities in the current/previous semesters?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Yes"
                        },

                        {
                            value: "2",
                            text: "No"
                        }
                    ],
                    optionsCaption: ""
                }

            ],
            title: "Demographics",
            navigationButtonsVisibility: "show"
        },

        {
            name: "page5",
            elements: [
                {
                    type: "panel",
                    name: "intendedActivity",
                    elements: [
                        {
                            type: "checkbox",
                            name: "activities",
                            title: "Which of the following out-of-classroom activities do you intend to participate in?(You can choose multiple items.)",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Design Competition Team"
                                },
                                {
                                    value: "2",
                                    text: "Culture, Faith, Gender, Identity"
                                },
                                {
                                    value: "3",
                                    text: "Engineering outreach support"
                                },
                                {
                                    value: "4",
                                    text: "Environmental"
                                },
                                {
                                    value: "5",
                                    text: "Film, Theatre, Visual Arts"
                                },
                                {
                                    value: "6",
                                    text: "Fraternity or Sorority, social"
                                },
                                {
                                    value: "7",
                                    text: "Fraternity or Sorority, coeducation related to your major, for instance business, engineering, or services"
                                },
                                {
                                    value: "8",
                                    text: "International experiences"
                                },
                                {
                                    value: "9",
                                    text: "Job"
                                },
                                {
                                    value: "10",
                                    text: "Living-Learning Community"
                                },
                                {
                                    value: "11",
                                    text: "Media, Publications and Journalism"
                                },
                                {
                                    value: "12",
                                    text: "Military"
                                },
                                {
                                    value: "13",
                                    text: "Music/Dance"
                                },
                                {
                                    value: "14",
                                    text: "Preprofessional"
                                },
                                {
                                    value: "15",
                                    text: "Professional Experiences"
                                },
                                {
                                    value: "16",
                                    text: "Research"
                                },
                                {
                                    value: "17",
                                    text: "Service, Public Service"
                                },
                                {
                                    value: "18",
                                    text: "Sports"
                                },
                                {
                                    value: "19",
                                    text: "Student Government"
                                },
                                {
                                    value: "20",
                                    text: "Other student clubs & organization?"
                                }
                            ],
                            navigationButtonsVisibility: "show"
                        },


                        {
                            name: "pagePrompt",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "participate",
                                    title: "To what extent do you agree the following reasons could prompt you to participate in out-of-classroom activities?",
                                    isRequired: true,
                                    rateValues: [
                                        {value: 1, text: "Strongly Disagree"},
                                        {value: 2, text: "Disagree"},
                                        {value: 3, text: "Agree"},
                                        {value: 4, text: "Strongly Agree"}
                                    ],
                                    choices: [
                                        {
                                            name: "noOCAReason1",
                                            value: "1",
                                            text: "Because I could afford the costs/expenses"
                                        },
                                        {
                                            name: "noOCAReason2",
                                            value: "2",
                                            text: "Because I had the time"
                                        },
                                        {
                                            name: "noOCAReason3",
                                            value: "3",
                                            text: "Because I was provided information concerning the activities"
                                        },
                                        {
                                            name: "noOCAReason4",
                                            value: "4",
                                            text: "Because I agree with the goals of the organization"
                                        },
                                        {
                                            name: "noOCAReason5",
                                            value: "5",
                                            text: "To be on par with other students in terms of involvement in activities"
                                        },
                                        {
                                            name: "noOCAReason6",
                                            value: "6",
                                            text: "To break down barriers of any kind (i.e., religion, race, Gender, sexual orientation)"
                                        }, {
                                            name: "noOCAReason7",
                                            value: "7",
                                            text: "To create positive impact on campus/community"
                                        }, {
                                            name: "noOCAReason8",
                                            value: "8",
                                            text: "To follow encouragement from an advisor or faculty member"
                                        }, {
                                            name: "noOCAReason9",
                                            value: "9",
                                            text: "To fulfill my personal interests"
                                        }, {
                                            name: "noOCAReason10",
                                            value: "10",
                                            text: "To gain experiences that make me competitive in the job market"
                                        }, {
                                            name: "noOCAReason11",
                                            value: "11",
                                            text: "To provide entertainment"
                                        }, {
                                            name: "noOCAReason12",
                                            value: "12",
                                            text: "To relieve stress"
                                        }, {
                                            name: "noOCAReason13",
                                            value: "13",
                                            text: "To try something new"
                                        }, {
                                            name: "noOCAReason14",
                                            value: "14",
                                            text: "Because of my parents influence"
                                        }
                                    ],
                                    optionsCaption: ""
                                }
                            ],
                        },


                        {
                            name: "page6",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "participationPrevention",
                                    title: "To what extent do you agree the following reasons could prevent you from participating in out-of-classroom activities?",
                                    isRequired: true,
                                    rateValues: [
                                        {value: 1, text: "Strongly Disagree"},
                                        {value: 2, text: "Disagree"},
                                        {value: 3, text: "Agree"},
                                        {value: 4, text: "Strongly Agree"}
                                    ],
                                    choices: [
                                        {
                                            name: "noOCAReason15",
                                            value: "1",
                                            text: "Cost (time and money) of joining was too high"
                                        },
                                        {
                                            name: "noOCAReason16",
                                            value: "2",
                                            text: "Didn't feel supported by faculty advisor"
                                        },
                                        {
                                            name: "noOCAReason17",
                                            value: "3",
                                            text: "Don't contribute to what I want to learn"
                                        },
                                        {
                                            name: "noOCAReason18",
                                            value: "4",
                                            text: "Personal matters prevent me (i.e., I became pregnant, I am married, I have children, etc.)"
                                        },
                                        {
                                            name: "noOCAReason19",
                                            value: "5",
                                            text: "Gender issue (i.e., awkward interactions between sexes)"
                                        },
                                        {
                                            name: "noOCAReason20",
                                            value: "6",
                                            text: "I am not a \"joiner\" (i.e., value personal goals above that of the group, emphasis on personal achievement)"
                                        }, {
                                            name: "noOCAReason21",
                                            value: "7",
                                            text: "Introverted personality (i.e., focus on internal thoughts, feelings)"
                                        }, {
                                            name: "noOCAReason22",
                                            value: "8",
                                            text: "Lack of motivation (i.e., I do not want to join, not interesting to me)"
                                        }, {
                                            name: "noOCAReason23",
                                            value: "9",
                                            text: "Lack of time, scheduling issue (i.e., great workload of the current major)"
                                        }, {
                                            name: "noOCAReason24",
                                            value: "10",
                                            text: "Lack the knowledge about the opportunities (i.e., lack the information of the out of class activities)"
                                        }, {
                                            name: "noOCAReason25",
                                            value: "11",
                                            text: "Lengthy, difficult membership process"
                                        }, {
                                            name: "noOCAReason26",
                                            value: "12",
                                            text: "Limit to number of participants; a competitive process to join"
                                        }, {
                                            name: "noOCAReason27",
                                            value: "13",
                                            text: "Possibility of negative impact"
                                        }, {
                                            name: "noOCAReason28",
                                            value: "14",
                                            text: "Race/ethnicity issues (i.e., not feeling welcomed; seemed like non-inclusive environment)"
                                        }, {
                                            name: "noOCAReason29",
                                            value: "15",
                                            text: "Social inertia (i.e., I joined something else and it became too hard to leave after joining)"
                                        }, {
                                            name: "noOCAReason30",
                                            value: "16",
                                            text: "Family matters prevent me (e.g. my family obligations prevent me from joining, etc.)"
                                        }
                                    ],
                                    optionsCaption: ""
                                }
                            ],
                        },


                        {
                            name: "page7",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "ae",
                                    title: "Please indicate the extent to which you agree with the following statements.",
                                    isRequired: true,
                                    rateValues: [
                                        {value: 1, text: "Strongly Disagree"},
                                        {value: 2, text: "Disagree"},
                                        {value: 3, text: "Agree"},
                                        {value: 4, text: "Strongly Agree"}
                                    ],
                                    choices: [
                                        {
                                            name: "ae1",
                                            value: "1",
                                            text: "My major is interesting to me."
                                        },
                                        {
                                            name: "ae2",
                                            value: "2",
                                            text: "I regret having entered in my major."
                                        },
                                        {
                                            name: "ae3",
                                            value: "3",
                                            text: "I am enthusiastic about my major."
                                        },
                                        {
                                            name: "ae4",
                                            value: "4",
                                            text: "I think I will be very happy to spend the rest of my career in my current academic discipline."
                                        },
                                        {
                                            name: "ae5",
                                            value: "5",
                                            text: "I do <strong>not </strong>feel a strong sense of “belonging” to my academic discipline."
                                        },
                                        {
                                            name: "ae6",
                                            value: "6",
                                            text: "I do <strong>not </strong> feel “emotionally attached” to my academic discipline."
                                        }, {
                                            name: "ae7",
                                            value: "7",
                                            text: "I do <strong>not </strong> feel like “part of the family” in my academic discipline."
                                        }, {
                                            name: "ae8",
                                            value: "8",
                                            text: "My eventual career will directly relate to a job in my academic discipline."
                                        }, {
                                            name: "ae9",
                                            value: "9",
                                            text: "In the future, I will <strong>not </strong>have a career that requires me to have skills of my academic discipline."
                                        }, {
                                            name: "ae10",
                                            value: "10",
                                            text: "I believe I can meet the demands of a job in my academic discipline."
                                        }, {
                                            name: "ae11",
                                            value: "11",
                                            text: "Being good at my major is an important part of who I am."
                                        }, {
                                            name: "ae12",
                                            value: "12",
                                            text: "Success in my major at school is very valuable to me."
                                        }, {
                                            name: "ae13",
                                            value: "13",
                                            text: "It matters to me how well I do in my major at school."
                                        }, {
                                            name: "ae14",
                                            value: "14",
                                            text: "I am constantly on the lookout for new ways to improve my life."
                                        }, {
                                            name: "ae15",
                                            value: "15",
                                            text: "If I see something I don’t like, I fix it."
                                        }, {
                                            name: "ae16",
                                            value: "16",
                                            text: "I love being a champion for my ideas, even against others’ opposition."
                                        }, {
                                            name: "ae17",
                                            value: "17",
                                            text: "I excel at identifying opportunities."
                                        }, {
                                            name: "ae18",
                                            value: "18",
                                            text: "If I believe in an idea, no obstacle will prevent me from making it happen."
                                        }, {
                                            name: "ae19",
                                            value: "19",
                                            text: "I feel like a real part of the field of my current academic discipline."
                                        }, {
                                            name: "ae20",
                                            value: "20",
                                            text: "I am treated with as much respect by faculty as other students in my major."
                                        }, {
                                            name: "ae21",
                                            value: "21",
                                            text: "The instructors in my major respect me."
                                        }, {
                                            name: "ae22",
                                            value: "22",
                                            text: "I am satisfied with the faculty in my major."
                                        }, {
                                            name: "ae23",
                                            value: "23",
                                            text: "I don&#39;t intend to change from my current major to another major."
                                        }, {
                                            name: "ae24",
                                            value: "24",
                                            text: "Overall, I am happy with the major I've chosen."
                                        }, {
                                            name: "ae25",
                                            value: "25",
                                            text: "I discuss academic issues with peers."
                                        }, {
                                            name: "ae26",
                                            value: "26",
                                            text: "I discuss career issues with peers."
                                        }, {
                                            name: "ae27",
                                            value: "27",
                                            text: "I discuss social issues with peers."
                                        }, {
                                            name: "ae28",
                                            value: "28",
                                            text: "I discuss cultural issues with peers."
                                        }, {
                                            name: "grit1",
                                            value: "29",
                                            text: "New ideas and projects sometimes distract me from previous ones."
                                        }, {
                                            name: "grit2",
                                            value: "30",
                                            text: "Setbacks don’t discourage me."
                                        }, {
                                            name: "grit3",
                                            value: "31",
                                            text: "I have been obsessed with a certain idea or project for a short time but later lost interest."
                                        }, {
                                            name: "grit4",
                                            value: "32",
                                            text: "I am a hard worker."
                                        }, {
                                            name: "grit5",
                                            value: "33",
                                            text: "I often set a goal but later choose to pursue a different one."
                                        }, {
                                            name: "grit6",
                                            value: "34",
                                            text: "I have difficulty maintaining my focus on projects that take more than a few months to complete."
                                        }, {
                                            name: "grit7",
                                            value: "35",
                                            text: "I finish whatever I begin."
                                        }, {
                                            name: "grit8",
                                            value: "36",
                                            text: "I am diligent."
                                        }
                                    ]
                                }
                            ],
                        },


                        {
                            name: "page8",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "livingArea",
                                    title: "Where are you living this academic year?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "A living learning/program related to science and engineering in a residence hall"
                                        },
                                        {
                                            value: "2",
                                            text: "A non-science or non-engineering living/learning program in a residence hall"
                                        },
                                        {
                                            value: "3",
                                            text: "A residence hall, but not as part of a living/learning program"
                                        },
                                        {
                                            value: "4",
                                            text: "A fraternity or sorority residence"
                                        },
                                        {
                                            value: "5",
                                            text: "Off campus by myself"
                                        },
                                        {
                                            value: "6",
                                            text: "Off campus with friends/peers"
                                        }, {
                                            value: "7",
                                            text: "Off campus with family"
                                        }, {
                                            value: "8",
                                            text: "Other (please specify)"
                                        }]
                                },

                                {
                                    type: "matrixdropdown",
                                    name: "gpa",
                                    title: "Please tells us your opinion about JavaScript MVVM frameworks",
                                    horizontalScroll: true,
                                    columnMinWidth: "130px",
                                    choices: [
                                        "Excelent", "Good", "Average", "Fair", "Poor"
                                    ],
                                    columns: [
                                        {
                                            name: "",
                                            title: "",
                                            cellType: "text"
                                        }, {
                                            name: "",
                                            title: "GPA",
                                        }
                                    ]
                                },
                            ],
                            rows: [
                                {
                                    name: "firstYearGpa",
                                    value: "na",
                                    text: "Not applicable because this is my first year at this institution (write N/A in the box on the right)"
                                }, {
                                    name: "cumulativeGPA",
                                    value: "gpa",
                                    text: "Cumulative GPA"
                                }, {
                                    name: "maxGPA",
                                    value: "maxGpa",
                                    text: "On a system where the maximum GPA is"
                                }
                            ]
                        }
                    ]
                    ,
                },

                {
                    name: "page9",
                    elements: [
                        {
                            type: "panel",
                            name: "educationPanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "guardian1",
                                    title: "Please identify parent/guardian #1 from the list below: ",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Father"
                                        },
                                        {
                                            value: "2",
                                            text: "Grandmother"
                                        },
                                        {
                                            value: "3",
                                            text: "Grandfather"
                                        },
                                        {
                                            value: "4",
                                            text: "Aunt"
                                        },
                                        {
                                            value: "5",
                                            text: "Sibling"
                                        },
                                        {
                                            value: "6",
                                            text: "Other blood relative"
                                        }, {
                                            value: "7",
                                            text: "Other family member (not related by blood)"
                                        }
                                    ],
                                    optionsCaption: ""
                                },


                                {
                                    type: "radiogroup",
                                    name: "guardian2",
                                    title: "Please identify parent/guardian #2 from the list below. Select NOT APPLICABLE if you don't have a second parent/guardian.",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Father"
                                        },
                                        {
                                            value: "2",
                                            text: "Grandmother"
                                        },
                                        {
                                            value: "3",
                                            text: "Grandfather"
                                        },
                                        {
                                            value: "4",
                                            text: "Aunt"
                                        },
                                        {
                                            value: "5",
                                            text: "Sibling"
                                        },
                                        {
                                            value: "6",
                                            text: "Other blood relative"
                                        }, {
                                            value: "7",
                                            text: "Other family member (not related by blood)"
                                        }
                                    ],
                                    optionsCaption: ""
                                },

                            ],
                        }]
                },

                {
                    name: "page10",
                    elements: [
                        {
                            type: "panel",
                            name: "educationPanel",
                            elements: [
                                {
                                    type: "matrix",
                                    name: "parentEducation",
                                    title: "What is the highest level of formal schooling completed by parent(s)/guardian(s)?",
                                    columns: [
                                        {
                                            value: 1,
                                            text: "Did not finish high school"
                                        }, {
                                            value: 2,
                                            text: "High school graduate or GED"
                                        }, {
                                            value: 3,
                                            text: "Attended college but did not receive a degree"
                                        }, {
                                            value: 4,
                                            text: "Vocational/technical certificate or diploma"
                                        }, {
                                            value: 5,
                                            text: "Associate or other 2-year degree"
                                        }, {
                                            value: 6,
                                            text: "Bachelor's or other 4-year degree"
                                        }, {
                                            value: 7,
                                            text: "Master's degree (M.A., M.S., M.B.A., etc.)"
                                        }, {
                                            value: 8,
                                            text: "Doctoral degree (Ph.D., M.D., etc."
                                        }, {
                                            value: 9,
                                            text: "Unknown/Not applicable"
                                        }
                                    ],
                                    rows: [
                                        {
                                            name: "guardian1SchoolLevel",
                                            value: "guardian1",
                                            text: "Guardian 1"
                                        }, {
                                            name: "guardian2SchoolLevel",
                                            value: "guardian2",
                                            text: "Guardian 2"
                                        }
                                    ]
                                },

                            ],
                        }]
                },


                {
                    name: "page11",
                    elements: [
                        {
                            type: "panel",
                            name: "educationPanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "siblingsCompleteDegree",
                                    title: "Has one of your siblings (sister or brother) completed a four-year degree or higher?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        },
                                        {
                                            value: "3",
                                            text: "I don't have a sibling."
                                        },
                                        {
                                            value: "4",
                                            text: "I don't know."
                                        }
                                    ],
                                    optionsCaption: ""
                                }

                            ],
                        }]
                },

                {
                    name: "page12",
                    elements: [
                        {
                            type: "panel",
                            name: "educationPanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "houseIncome",
                                    title: "What is the income level in your household? (Provide your best guess).",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Less than $19,999"
                                        },
                                        {
                                            value: "2",
                                            text: "$20,000 - $39,999"
                                        },
                                        {
                                            value: "3",
                                            text: "$40,000 - $59,999"
                                        },
                                        {
                                            value: "4",
                                            text: "$60,000 - $79,999"
                                        },
                                        {
                                            value: "5",
                                            text: "$80,000 - $99,999"
                                        },
                                        {
                                            value: "6",
                                            text: "$100,000 - $149,999"
                                        },
                                        {
                                            value: "7",
                                            text: "$150,000 - $200,000"
                                        },
                                        {
                                            value: "8",
                                            text: "More than $200,000"
                                        }
                                    ],
                                    optionsCaption: ""
                                },
                            ],
                        }]
                },

                {
                    name: "page13",
                    elements: [
                        {
                            type: "panel",
                            name: "agePanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "usCitizen",
                                    title: "Please select one: I am",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "a U.S. Citizen"
                                        },
                                        {
                                            value: "2",
                                            text: "a U.S. Citizen: naturalized"
                                        },
                                        {
                                            value: "3",
                                            text: "a Permanent Resident"
                                        },
                                        {
                                            value: "4",
                                            text: "an International Student (on F-1 or J-1 visa)"
                                        }
                                    ],
                                    optionsCaption: ""
                                },

                                {
                                    type: "radiogroup",
                                    name: "military",
                                    title: "Did you serve or are you currently serving in the armed forces of the United States?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        }
                                    ],
                                    optionsCaption: ""
                                },


                                {
                                    type: "radiogroup",
                                    name: "disability",
                                    title: "Please tell us if you have any disabilities. (Mark all that apply.)",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "I have no disabilities."
                                        },
                                        {
                                            value: "2",
                                            text: "Coordination impairment"
                                        },
                                        {
                                            value: "3",
                                            text: "Hearing impairment"
                                        },
                                        {
                                            value: "4",
                                            text: "Learning disability"
                                        },
                                        {
                                            value: "5",
                                            text: "Mobility impairment"
                                        },
                                        {
                                            value: "6",
                                            text: "Speech impairment"
                                        },
                                        {
                                            value: "7",
                                            text: "Visual impairment"
                                        },
                                        {
                                            value: "8",
                                            text: "Other: (please specify)"
                                        },
                                        {
                                            value: "9",
                                            text: "I choose not to respond"
                                        }
                                    ],
                                    optionsCaption: ""
                                },


                                {
                                    type: "radiogroup",
                                    name: "lbgt",
                                    title: "You consider yourself to be:",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Bisexual"
                                        },
                                        {
                                            value: "2",
                                            text: "Gay"
                                        },
                                        {
                                            value: "3",
                                            text: "Lesbian"
                                        },
                                        {
                                            value: "4",
                                            text: "Heterosexual(or Straight)"
                                        },
                                        {
                                            value: "5",
                                            text: "Queer or questioning"
                                        },
                                        {
                                            value: "6",
                                            text: "Asexual"
                                        },
                                        {
                                            value: "7",
                                            text: "Uncertain"
                                        },
                                        {
                                            value: "8",
                                            text: "I choose not to respond"
                                        }
                                    ],
                                    optionsCaption: ""
                                }
                            ],
                        }]
                },


                {
                    name: "page14",
                    elements: [
                        {
                            type: "panel",
                            name: "agePanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "hs1",
                                    title: "Did you graduate from a high school in the United States?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        }
                                    ],
                                    optionsCaption: ""
                                },

                                {
                                    type: "text",
                                    name: "hs2",
                                    title: "What is the name of your high school?",
                                    isRequired: true,
                                    inputType: "text"
                                },

                                {
                                    type: "text",
                                    name: "hs3",
                                    title: "What is the zip code of the town you attended your high school?",
                                    isRequired: true,
                                    inputType: "number"
                                },

                                {
                                    type: "radiogroup",
                                    name: "hs4",
                                    title: "Were you involved in out-of-class activities in high school?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        }
                                    ],
                                    optionsCaption: ""
                                },


                                {
                                    type: "dropdown",
                                    name: "hs5",
                                    isRequired: true,
                                    titleLocation: "hidden",
                                    choices: [
                                        {
                                            value: "1",
                                            text: "1"
                                        },
                                        {
                                            value: "2",
                                            text: "2"
                                        },
                                        {
                                            value: "3",
                                            text: "3"
                                        },
                                        {
                                            value: "4",
                                            text: "4"
                                        },
                                        {
                                            value: "5",
                                            text: "5"
                                        },
                                        {
                                            value: "6",
                                            text: "6"
                                        },
                                        {
                                            value: "7",
                                            text: "7"
                                        },
                                        {
                                            value: "8",
                                            text: "8"
                                        },
                                        {
                                            value: "9",
                                            text: "9"
                                        },
                                        {
                                            value: "10",
                                            text: "10"
                                        },
                                        {
                                            value: "11",
                                            text: "11+"
                                        }
                                    ]
                                },


                                {
                                    type: "radiogroup",
                                    name: "hs6",
                                    title: "How actively did you participate in out-of-class activities in high school?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Not at all active"
                                        },
                                        {
                                            value: "2",
                                            text: "Minimally active"
                                        },
                                        {
                                            value: "3",
                                            text: "Moderately active"
                                        },
                                        {
                                            value: "4",
                                            text: "Highly active"
                                        }
                                    ],
                                    optionsCaption: ""
                                }

                            ],
                        }]
                },


                {
                    name: "page16",
                    elements: [
                        {
                            type: "panel",
                            name: "agePanel",
                            elements: [
                                {
                                    type: "text",
                                    name: "contact1",
                                    title: "Please provide any comments you may have regarding you experience in taking this survey.",
                                    inputType: "text",
                                },

                                {
                                    type: "radiogroup",
                                    name: "contact2",
                                    title: "We may have questions about your responses. May we contact you?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        }
                                    ],
                                    optionsCaption: ""
                                },
                                {
                                    type: "multipletext",
                                    name: "info",
                                    title: "Please provide your contact information below.",
                                    rowCount: 3,
                                    items: [
                                        {
                                            name: "contact3",
                                            title: "Name"
                                        }, {
                                            name: "contact4",
                                            title: "Phone Number"
                                        }, {
                                            name: "contact5",
                                            title: "Email Address"
                                        }
                                    ]
                                }

                            ],
                        }]
                },

                {
                    name: "page17",
                    elements: [
                        {
                            type: "panel",
                            name: "drawingPanel",
                            elements: [
                                {
                                    type: "text",
                                    name: "contact6",
                                    title: "If you want to enter into the drawing for the gift card, please add your email address.",
                                    inputType: "text"
                                },
                            ],
                        }]
                },


                {
                    name: "page18",
                    elements: [
                        {
                            type: "panel",
                            name: "activitiesPanel",
                            elements: [],
                        }]
                },


                {
                    name: "page19",
                    elements: [
                        {
                            type: "panel",
                            name: "activitiesPanelMatrix",
                            elements: [
                                {
                                    type: "matrix",
                                    name: "",
                                    title: "How actively have you participated in the activities you selected?",
                                    columns: [
                                        {
                                            value: 1,
                                            text: "Not Active At All"
                                        }, {
                                            value: 2,
                                            text: "Minimally Active"
                                        }, {
                                            value: 3,
                                            text: "Moderately Active"
                                        }, {
                                            value: 4,
                                            text: "Highly Active"
                                        }
                                    ],
                                    rows: [
                                        {
                                            name: "levelAct1",
                                            value: "1",
                                            text: "Design competition team"
                                        },
                                        {
                                            name: "levelAct2",
                                            value: "2",
                                            text: "Culture, faith, gender, identity"
                                        },
                                        {
                                            name: "levelAct3",
                                            value: "3",
                                            text: "Environmental"
                                        },
                                        {
                                            name: "levelAct4",
                                            value: "4",
                                            text: "Engineering outreach support"
                                        },
                                        {
                                            name: "levelAct5",
                                            value: "5",
                                            text: "Film, Theater, Visual Arts"
                                        },
                                        {
                                            name: "levelAct6",
                                            value: "6",
                                            text: "Fraternity or sorority, social"
                                        },
                                        {
                                            name: "levelAct7",
                                            value: "7",
                                            text: "Fraternity or sorority,coeducation related to your major, for instance business, engineering, or services"
                                        },
                                        {
                                            name: "levelAct8",
                                            value: "8",
                                            text: "International experiences"
                                        },
                                        {
                                            name: "levelAct9",
                                            value: "9",
                                            text: "Job"
                                        },
                                        {
                                            name: "levelAct10",
                                            value: "10",
                                            text: "Living-learning community"
                                        },
                                        {
                                            name: "levelAct11",
                                            value: "11",
                                            text: "Media, publications, and journalism"
                                        },
                                        {
                                            name: "levelAct12",
                                            value: "12",
                                            text: "Military"
                                        },
                                        {
                                            name: "levelAct13",
                                            value: "13",
                                            text: "Music/Dance"
                                        },
                                        {
                                            name: "levelAct14",
                                            value: "14",
                                            text: "Pre-professional"
                                        },
                                        {
                                            name: "levelAct15",
                                            value: "15",
                                            text: "Professional experiences"
                                        },
                                        {
                                            name: "levelAct16",
                                            value: "16",
                                            text: "Research"
                                        },
                                        {
                                            name: "levelAct17",
                                            value: "17",
                                            text: "Service, public service"
                                        },
                                        {
                                            name: "levelAct18",
                                            value: "18",
                                            text: "Sports"
                                        },
                                        {
                                            name: "levelAct19",
                                            value: "19",
                                            text: "Student government"
                                        },
                                        {
                                            name: "levelAct20",
                                            value: "20",
                                            text: "Other student clubs & organizations. Please specify below."
                                        }
                                    ]
                                },

                                {
                                    type: "radiogroup",
                                    name: "participationHours",
                                    title: "Overall, how many hours in a week have you participated in the activities you selected?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "1-3"
                                        },
                                        {
                                            value: "2",
                                            text: "4-6"
                                        },
                                        {
                                            value: "3",
                                            text: "7-9"
                                        },
                                        {
                                            value: "4",
                                            text: "10-12"
                                        },
                                        {
                                            value: "5",
                                            text: "12+"
                                        }
                                    ],
                                    optionsCaption: ""
                                }
                            ],
                        }]
                },


                {
                    name: "page20",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "participationCredit",
                            title: "Did you get course credit for participating in any out-of-classroom activity in the current/previous semesters?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Yes"
                                },
                                {
                                    value: "2",
                                    text: "No"
                                }
                            ],
                            optionsCaption: ""
                        },

                        {
                            type: "radiogroup",
                            name: "participationPaid",
                            title: "Did you get paid for participating in any out-of-classroom activity in the current/previous semesters?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Yes"
                                },
                                {
                                    value: "2",
                                    text: "No"
                                }
                            ],
                            optionsCaption: ""
                        }],
                },


                {
                    name: "page21",
                    elements: [
                        {
                            type: "matrix",
                            name: "extent",
                            title: "To what extent do you agree that you gained the following outcomes from your involvement in out-of-classroom activities?",
                            columns: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                }, {
                                    value: 2,
                                    text: "Disagree"
                                }, {
                                    value: 3,
                                    text: "Agree"
                                }, {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            rows: [
                                {
                                    name: "allOut1",
                                    value: "1",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., problem solving skills, analytical skills, critical thinking skills)\">Intellectual development</span>"
                                },
                                {
                                    name: "allOut2",
                                    value: "2",
                                    text: "<span style=\"color:blue;\" title=\"(e.g., self-confidence, identity development, time management skills)\">Personal development</span>"
                                },
                                {
                                    name: "allOut3",
                                    value: "3",
                                    text: "<span style=\"color:blue;\" title=\"(e. g., awareness of social issues, treat each other fairly, and civic activism)\">Social development</span>"
                                },
                                {
                                    name: "allOut4",
                                    value: "4",
                                    text: "<span style=\"color:blue;\" title=\"(e. g., academic effort, active and collaborative learning, and interaction with peers and faculty)\">Academic engagement</span>"
                                },
                                {
                                    name: "allOut5",
                                    value: "5",
                                    text: "<span style=\"color:blue;\" title=\"(e.g., comfort in various environments and with various persons, campus involvement, and student chapters)\">Social engagement</span>"
                                },
                                {
                                    name: "allOut6",
                                    value: "6",
                                    text: "<span style=\"color:blue;\" title=\"(e. g., professional skills; use of communication, knowledge, technical skills, clinical reasoning, emotions, values, and reflection in daily practice; able to integrate theory and practice)\">Professional development</span>"
                                },
                                {
                                    name: "allOut7",
                                    value: "7",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., knowledge, skills, and affect/motivation that enable individuals to adapt effectively with different cultures; promoting racial understanding; socializing with people from different racial/ethnic groups)\">Cross-cultural awareness</span>"
                                },
                                {
                                    name: "allOut8",
                                    value: "8",
                                    text: "<span style=\"color:blue;\" title=\"(e. g., working to make a difference within a community; development gained through service learning, community service, and voluntarism)\">Civic development</span>"
                                },
                                {
                                    name: "allOut9",
                                    value: "9",
                                    text: "Communication skills"
                                },
                                {
                                    name: "allOut10",
                                    value: "10",
                                    text: "Leadership skills"
                                },
                                {
                                    name: "allOut11",
                                    value: "11",
                                    text: "<span style=\"color:blue;\" title=\"(e. g., satisfaction with the major, satisfaction with the advising quality)\">Satisfaction with the college experience</span>"
                                },
                                {
                                    name: "allOut12",
                                    value: "12",
                                    text: "Sense of belonging to college"
                                },
                                {
                                    name: "allOut13",
                                    value: "13",
                                    text: "Opportunity to be independent"
                                },
                                {
                                    name: "allOut14",
                                    value: "14",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., thinking outside the box, art, invention, innovation; ability to perceive the world in new ways, to find hidden patterns, to make connections between seemingly unrelated phenomena, and to generate solutions. Creativity involves two processes: thinking, then producing. If you have ideas, but don’t act on them, you are imaginative but not creative.)\">Creativity</span>"
                                },
                                {
                                    name: "allOut15",
                                    value: "15",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., acquisition of in-depth. knowledge and understanding of international issues, an appreciation of and ability to learn and work with. people from diverse linguistic and cultural backgrounds)\"> Global competence </span>"
                                },
                                {
                                    name: "allOut16",
                                    value: "16",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., skill in planning, combining, and adapting in a clever way; Manner in which one identifies problems and finds solutions; skill or cleverness that allows someone to solve problems, invent things, etc.)\"> Practical ingenuity/inventiveness</span>"
                                },
                                {
                                    name: "allOut17",
                                    value: "17",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., ability to learn new things quickly, deal with changing world and apply knowledge to new problems and new contexts)\"> Resilience and flexibility </span>"
                                },
                                {
                                    name: "allOut18",
                                    value: "18",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., pertaining to or dealing with morals or the principles of morality; pertaining to right and wrong in conduct. 2. being in accordance with the rules or standards for right conduct or practice, especially the standards of a profession.)\"> Ethical Standards</span>"
                                },
                                {
                                    name: "allOut19",
                                    value: "19",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., able to understand and make physical, human, and political decisions; interdependence between technology and the economic and social foundations of modern society)\"> Business and management skills</span>"
                                },
                                {
                                    name: "allOut20",
                                    value: "20",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., the degree of attention, curiosity, interest, optimism, and passion that I showed lowered)\">Decreased academic engagement</span>"
                                },
                                {
                                    name: "allOut21",
                                    value: "21",
                                    text: "<span style=\"color:blue;\" title=\"(extended time to graduate, i.e., because participating in study abroad, co-op, internship which add to graduate timeline)\">Academic timeline extended</span>"
                                },
                                {
                                    name: "allOut22",
                                    value: "22",
                                    text: "Consumed my time therefore my schedule was less flexible"
                                },
                                {
                                    name: "allOut23",
                                    value: "23",
                                    text: "Consumed my time therefore my free time was reduced"
                                },
                                {
                                    name: "allOut24",
                                    value: "24",
                                    text: "Damaged interpersonal relationships"
                                },
                                {
                                    name: "allOut25",
                                    value: "25",
                                    text: "Decreased my GPA in college"
                                },
                                {
                                    name: "allOut26",
                                    value: "26",
                                    text: "Increased expense"
                                },
                                {
                                    name: "allOut27",
                                    value: "27",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., social transition to the college, less open to new people)\">Social development negatively impacted</span>"
                                },
                                {
                                    name: "allOut28",
                                    value: "28",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., physical health, mental health)\">Declined personal health</span>"
                                },
                                {
                                    name: "allOut29",
                                    value: "29",
                                    text: "Decreased social engagement&nbsp;"
                                },
                                {
                                    name: "allOut30",
                                    value: "30",
                                    text: "<span style=\"color:blue;\" title=\"(i.e., poor decision making skills)\">Personal development negatively impacted</span>"
                                }
                            ]
                        }],
                },


                {
                    name: "page22",
                    elements: [
                        {
                            type: "matrix",
                            name: "prompted",
                            title: "Reasons\n" +
                                " \n" +
                                "To what extent do you agree the following reasons prompted you to participate in out-of-classroom activities? \n" +
                                " \n" +
                                " Consider the statement: I participate in out-of-class activities because ________ [fill in a reason below].\n" +
                                " ",
                            columns: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                }, {
                                    value: 2,
                                    text: "Disagree"
                                }, {
                                    value: 3,
                                    text: "Agree"
                                }, {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            rows: [
                                {
                                    name: "allReason1",
                                    value: "1",
                                    text: "Because I could afford the costs/expense"
                                },
                                {
                                    name: "allReason2",
                                    value: "2",
                                    text: "Because I had the time"
                                },
                                {
                                    name: "allReason3",
                                    value: "3",
                                    text: "Because I was provided information concerning the activities"
                                },
                                {
                                    name: "allReason4",
                                    value: "4",
                                    text: "Because I agree with goals of organization"
                                },
                                {
                                    name: "allReason5",
                                    value: "5",
                                    text: "To be on par with other students in terms of involvement in activities"
                                },
                                {
                                    name: "allReason6",
                                    value: "6",
                                    text: "To break down barriers of any kind (i.e., religion, race, Gender, sexual orientation)"
                                },
                                {
                                    name: "allReason7",
                                    value: "7",
                                    text: "To create positive impact on campus /community"
                                },
                                {
                                    name: "allReason8",
                                    value: "8",
                                    text: "To follow encouragement from an advisor or faculty member"
                                },
                                {
                                    name: "allReason9",
                                    value: "9",
                                    text: "To fulfill my personal interests"
                                },
                                {
                                    name: "allReason10",
                                    value: "10",
                                    text: "To gain experiences that make me more competitive in the job market"
                                },
                                {
                                    name: "allReason11",
                                    value: "11",
                                    text: "To provide entertainment"
                                },
                                {
                                    name: "allReason12",
                                    value: "12",
                                    text: "To relieve stress"
                                },
                                {
                                    name: "allReason13",
                                    value: "13",
                                    text: "To try something new"
                                },
                                {
                                    name: "allReason14",
                                    value: "14",
                                    text: "Because of my parents influence"
                                }
                            ]
                        }],
                },


                {
                    name: "page23",
                    elements: [{
                        type: "matrix",
                        name: "prevented",
                        title: "Reasons\n" +
                            "\n" +
                            " \n" +
                            "\n" +
                            "To what extent do you agree the following reasons prevented you from participating in out-of-classroom activites? \n" +
                            "\n" +
                            " \n" +
                            "\n" +
                            "Consider the statement: I do not participate in out-of-class activities because ________ [fill in a reason below].",
                        columns: [
                            {
                                value: 1,
                                text: "Strongly Disagree"
                            }, {
                                value: 2,
                                text: "Disagree"
                            }, {
                                value: 3,
                                text: "Agree"
                            }, {
                                value: 4,
                                text: "Strongly Agree"
                            }
                        ],
                        rows: [
                            {
                                name: "allReason15",
                                value: "1",
                                text: "Cost (time and money) of joining was too high"
                            },
                            {
                                name: "allReason16",
                                value: "2",
                                text: "Didn’t feel supported by the faculty advisor"
                            },
                            {
                                name: "allReason17",
                                value: "3",
                                text: "Don’t contribute to what I want to learn"
                            },
                            {
                                name: "allReason18",
                                value: "4",
                                text: "Family matters (i.e., my family obligations prevent me from joining)"
                            },
                            {
                                name: "allReason19",
                                value: "5",
                                text: "Gender issue (i.e., awkward interactions between sexes)"
                            },
                            {
                                name: "allReason20",
                                value: "6",
                                text: "I am not a “joiner” (i.e., value personal goals above that of the group, emphasis on personal achievement)"
                            },
                            {
                                name: "allReason21",
                                value: "7",
                                text: "Introverted personality (i.e., focus on internal thoughts, feelings)"
                            },
                            {
                                name: "allReason22",
                                value: "8",
                                text: "Lack of motivation (i.e., I do not want to join, not interesting to me)"
                            },
                            {
                                name: "allReason23",
                                value: "9",
                                text: "Lack of time, scheduling issue (i.e., great workload of the current major)"
                            },
                            {
                                name: "allReason24",
                                value: "10",
                                text: "Lack the knowledge about the opportunities (i.e., lack the information of the out of class activities)"
                            },
                            {
                                name: "allReaso25",
                                value: "11",
                                text: "Lengthy, difficult membership process"
                            },
                            {
                                name: "allReason26",
                                value: "12",
                                text: "Limit to number of participants; a competitive process to join"
                            },
                            {
                                name: "allReason27",
                                value: "13",
                                text: "Possibility of negative impact"
                            },
                            {
                                name: "allReason28",
                                value: "14",
                                text: "Race/ethnicity issues (i.e., not feeling welcomed; seemed like non-inclusive environment)"
                            },
                            {
                                name: "allReason29",
                                value: "15",
                                text: "Social inertia (i.e., I joined something else and it became too hard to leave after joining)"
                            },
                            {
                                name: "allReason30",
                                value: "16",
                                text: "Personal matters (e.g. I became pregnant, I am married, I have children, etc.)"
                            }
                        ]
                    }],
                },


                {
                    name: "page24",
                    elements: [{
                        type: "radiogroup",
                        name: "activitiesTopOutcome",
                        title: "From the activities you have participated in, select your top one, the one from which you gained the most outcomes.",
                        isRequired: true,
                        hasNone: true,
                        colCount: 2,
                        choices: [
                            {
                                value: "1",
                                text: "Design competition team"
                            },
                            {
                                value: "2",
                                text: "Culture, faith, gender, identity"
                            },
                            {
                                value: "3",
                                text: "Environmental"
                            },
                            {
                                value: "4",
                                text: "Engineering outreach support"
                            },
                            {
                                value: "5",
                                text: "Film, Theater, Visual Arts"
                            },
                            {
                                value: "6",
                                text: "Fraternity or sorority, social"
                            },
                            {
                                value: "7",
                                text: "Fraternity or sorority,coeducation related to your major, for instance business, engineering, or services"
                            },
                            {
                                value: "8",
                                text: "International experiences"
                            },
                            {
                                value: "9",
                                text: "Job"
                            },
                            {
                                value: "10",
                                text: "Living-learning community"
                            },
                            {
                                value: "11",
                                text: "Media, publications, and journalism"
                            },
                            {
                                value: "12",
                                text: "Military"
                            },
                            {
                                value: "13",
                                text: "Music/Dance"
                            },
                            {
                                value: "14",
                                text: "Pre-professional"
                            },
                            {
                                value: "15",
                                text: "Professional experiences"
                            },
                            {
                                value: "16",
                                text: "Research"
                            },
                            {
                                value: "17",
                                text: "Service, public service"
                            },
                            {
                                value: "18",
                                text: "Sports"
                            },
                            {
                                value: "19",
                                text: "Student government"
                            },
                            {
                                value: "20",
                                text: "Other student clubs & organizations."
                            }
                        ]
                    }]
                },
                {
                    name: "page26",
                    elements: [{
                        type: "matrix",
                        name: "extentTopActivity",
                        title: "To what extent do you agree that you gained the following outcomes from your involvement in the top activity?",
                        columns: [
                            {
                                value: 1,
                                text: "Strongly Disagree"
                            }, {
                                value: 2,
                                text: "Disagree"
                            }, {
                                value: 3,
                                text: "Agree"
                            }, {
                                value: 4,
                                text: "Strongly Agree"
                            }
                        ],
                        rows: [
                            {
                                name: "topOut1",
                                value: "1",
                                text: "<span style=\"color:blue;\" title=\"(i.e., problem solving skills, analytical skills, critical thinking skills)\">Intellectual development</span>"
                            },
                            {
                                name: "topOut2",
                                value: "2",
                                text: "<span style=\"color:blue;\" title=\"(e.g., self-confidence, identity development, time management skills)\">Personal development</span>"
                            },
                            {
                                name: "topOut3",
                                value: "3",
                                text: "<span style=\"color:blue;\" title=\"(e. g., awareness of social issues, treat each other fairly, and civic activism)\">Social development</span>"
                            },
                            {
                                name: "topOut4",
                                value: "4",
                                text: "<span style=\"color:blue;\" title=\"(e. g., academic effort, active and collaborative learning, and interaction with peers and faculty)\">Academic engagement</span>"
                            },
                            {
                                name: "topOut5",
                                value: "5",
                                text: "<span style=\"color:blue;\" title=\"(e.g., comfort in various environments and with various persons, campus involvement, and student chapters)\">Social engagement</span>"
                            },
                            {
                                name: "topOut6",
                                value: "6",
                                text: "<span style=\"color:blue;\" title=\"(e. g., professional skills; use of communication, knowledge, technical skills, clinical reasoning, emotions, values, and reflection in daily practice; able to integrate theory and practice)\">Professional development</span>"
                            },
                            {
                                name: "topOut7",
                                value: "7",
                                text: "<span style=\"color:blue;\" title=\"(i.e., knowledge, skills, and affect/motivation that enable individuals to adapt effectively with different cultures; promoting racial understanding; socializing with people from different racial/ethnic groups)\">Cross-cultural awareness</span>"
                            },
                            {
                                name: "topOut8",
                                value: "8",
                                text: "<span style=\"color:blue;\" title=\"(e. g., working to make a difference within a community; development gained through service learning, community service, and voluntarism)\">Civic development</span>"
                            },
                            {
                                name: "topOut9",
                                value: "9",
                                text: "Communication skills"
                            },
                            {
                                name: "topOut10",
                                value: "10",
                                text: "Leadership skills"
                            },
                            {
                                name: "topOut11",
                                value: "11",
                                text: "<span style=\"color:blue;\" title=\"(e. g., satisfaction with the major, satisfaction with the advising quality)\">Satisfaction with the college experience</span>"
                            },
                            {
                                name: "topOut12",
                                value: "12",
                                text: "Sense of belonging to college"
                            },
                            {
                                name: "topOut13",
                                value: "13",
                                text: "Opportunity to be independent"
                            },
                            {
                                name: "topOut14",
                                value: "14",
                                text: "<span style=\"color:blue;\" title=\"(i.e., thinking outside the box, art, invention, innovation; ability to perceive the world in new ways, to find hidden patterns, to make connections between seemingly unrelated phenomena, and to generate solutions. Creativity involves two processes: thinking, then producing. If you have ideas, but don’t act on them, you are imaginative but not creative.)\">Creativity</span>"
                            },
                            {
                                name: "topOut15",
                                value: "15",
                                text: "<span style=\"color:blue;\" title=\"(i.e., acquisition of in-depth. knowledge and understanding of international issues, an appreciation of and ability to learn and work with. people from diverse linguistic and cultural backgrounds)\"> Global competence </span>"
                            },
                            {
                                name: "topOut16",
                                value: "16",
                                text: "<span style=\"color:blue;\" title=\"(i.e., skill in planning, combining, and adapting in a clever way; Manner in which one identifies problems and finds solutions; skill or cleverness that allows someone to solve problems, invent things, etc.)\"> Practical ingenuity/inventiveness</span>"
                            },
                            {
                                name: "topOut17",
                                value: "17",
                                text: "<span style=\"color:blue;\" title=\"(i.e., ability to learn new things quickly, deal with changing world and apply knowledge to new problems and new contexts)\"> Resilience and flexibility </span>"
                            },
                            {
                                name: "topOut18",
                                value: "18",
                                text: "<span style=\"color:blue;\" title=\"(i.e., pertaining to or dealing with morals or the principles of morality; pertaining to right and wrong in conduct. 2. being in accordance with the rules or standards for right conduct or practice, especially the standards of a profession.)\"> Ethical Standards</span>"
                            },
                            {
                                name: "topOut19",
                                value: "19",
                                text: "<span style=\"color:blue;\" title=\"(i.e., able to understand and make physical, human, and political decisions; interdependence between technology and the economic and social foundations of modern society)\"> Business and management skills</span>"
                            },
                            {
                                name: "topOut20",
                                value: "20",
                                text: "<span style=\"color:blue;\" title=\"(i.e., the degree of attention, curiosity, interest, optimism, and passion that I showed lowered)\">Decreased academic engagement</span>"
                            },
                            {
                                name: "topOut21",
                                value: "21",
                                text: "<span style=\"color:blue;\" title=\"(extended time to graduate, i.e., because participating in study abroad, co-op, internship which add to graduate timeline)\">Academic timeline extended</span>"
                            },
                            {
                                name: "topOut22",
                                value: "22",
                                text: "Consumed my time therefore my schedule was less flexible"
                            },
                            {
                                name: "topOut23",
                                value: "23",
                                text: "Consumed my time therefore my free time was reduced"
                            },
                            {
                                name: "topOut24",
                                value: "24",
                                text: "Damaged interpersonal relationships"
                            },
                            {
                                name: "topOut25",
                                value: "25",
                                text: "Decreased my GPA in college"
                            },
                            {
                                name: "topOut26",
                                value: "26",
                                text: "Increased expense"
                            },
                            {
                                name: "topOut27",
                                value: "27",
                                text: "<span style=\"color:blue;\" title=\"(i.e., social transition to the college, less open to new people)\">Social development negatively impacted</span>"
                            },
                            {
                                name: "topOut28",
                                value: "28",
                                text: "<span style=\"color:blue;\" title=\"(i.e., physical health, mental health)\">Declined personal health</span>"
                            },
                            {
                                name: "topOut29",
                                value: "29",
                                text: "Decreased social engagement&nbsp;"
                            },
                            {
                                name: "topOut30",
                                value: "30",
                                text: "<span style=\"color:blue;\" title=\"(i.e., poor decision making skills)\">Personal development negatively impacted</span>"
                            }
                        ]
                    }]
                },


                {
                    page: "27",
                    elements: [{
                        type: "matrix",
                        name: "promptedTopActiv",
                        title: "Reasons\n" +
                            " \n" +
                            "To what extent do you agree the following reasons prompted you to participate in out-of-classroom activities? \n" +
                            " \n" +
                            " Consider the statement: I participate in out-of-class activities because ________ [fill in a reason below].\n" +
                            " ",
                        columns: [
                            {
                                value: 1,
                                text: "Strongly Disagree"
                            }, {
                                value: 2,
                                text: "Disagree"
                            }, {
                                value: 3,
                                text: "Agree"
                            }, {
                                value: 4,
                                text: "Strongly Agree"
                            }
                        ],
                        rows: [
                            {
                                name: "topReason1",
                                value: "1",
                                text: "Because I could afford the costs/expense"
                            },
                            {
                                name: "topReason2",
                                value: "2",
                                text: "Because I had the time"
                            },
                            {
                                name: "topReason3",
                                value: "3",
                                text: "Because I was provided information concerning the activities"
                            },
                            {
                                name: "topReason4",
                                value: "4",
                                text: "Because I agree with goals of organization"
                            },
                            {
                                name: "topReason5",
                                value: "5",
                                text: "To be on par with other students in terms of involvement in activities"
                            },
                            {
                                name: "topReason6",
                                value: "6",
                                text: "To break down barriers of any kind (i.e., religion, race, Gender, sexual orientation)"
                            },
                            {
                                name: "topReason7",
                                value: "7",
                                text: "To create positive impact on campus /community"
                            },
                            {
                                name: "topReason8",
                                value: "8",
                                text: "To follow encouragement from an advisor or faculty member"
                            },
                            {
                                name: "topReason9",
                                value: "9",
                                text: "To fulfill my personal interests"
                            },
                            {
                                name: "topReason10",
                                value: "10",
                                text: "To gain experiences that make me more competitive in the job market"
                            },
                            {
                                name: "topReason11",
                                value: "11",
                                text: "To provide entertainment"
                            },
                            {
                                name: "topReason12",
                                value: "12",
                                text: "To relieve stress"
                            },
                            {
                                name: "topReason13",
                                value: "13",
                                text: "To try something new"
                            },
                            {
                                name: "topReason14",
                                value: "14",
                                text: "Because of my parents influence"
                            }
                        ]
                    }]
                },


                {
                    type: "panel",
                    name: "E2Panel",
                    elements: [
                        {
                            type: "dropdown",
                            name: "E2",
                            title: "E2020-2: Practical Ingenuity",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            optionsCaption: "Select your opinion here"
                        },
                        {
                            type: "dropdown",
                            name: "E3",
                            title: "E2020-3: Creativity",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            optionsCaption: "Select your opinion here"
                        },
                        {
                            type: "dropdown",
                            name: "E4",
                            title: "E2020-4: Communication",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            optionsCaption: "Select your opinion here"
                        },
                        {
                            type: "dropdown",
                            name: "E5",
                            title: "E2020-5: Business and Management",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            optionsCaption: "Select your opinion here"
                        },
                        {
                            type: "dropdown",
                            name: "E6",
                            title: "E2020-6: Leadership",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            optionsCaption: "Select your opinion here"
                        },
                        {
                            type: "dropdown",
                            name: "E7",
                            title: "E2020-7: High Ethical Standards",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            optionsCaption: "Select your opinion here"
                        },
                        {
                            type: "dropdown",
                            name: "E8",
                            title: "E2020-8: Professionalism",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            optionsCaption: "Select your opinion here"
                        },
                        {
                            type: "dropdown",
                            name: "E9",
                            title: "E2020-9: Dynamism, Agility, Resilience, and Flexibility",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ],
                            optionsCaption: "Select your opinion here"
                        }
                    ],
                    title: "Engineering 2020 Outcomes",
                    isRequired: true
                },
                {

                    name: "page5",
                    elements: [
                        {
                            type: "panel",
                            name: "contactInfoPanel",
                            elements: [
                                {
                                    type: "text",
                                    name: "phone",
                                    title: "Phone Number",
                                    inputType: "tel",
                                    placeHolder: "Enter your phone number here"
                                }
                            ],
                            title: "Contact Information",
                            description: "Would you mind receiving future questions about this survey? If so, would you mind sharing your phone number below?"
                        }
                    ],
                    title: "Other"
                }
            ],
            triggers: [
                {
                    type: "complete"
                },
                {
                    type: "complete",
                    expression: "{consentQuestion} = \"disagree\""
                }
            ],
            showProgressBar: "top"
        },]
}


