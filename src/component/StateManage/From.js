import React from 'react';

const From = () => {
  return (
    <div>
      <div className='flex items-start justify-center'>
        <div className="flex gap-10 w-full m-10 md:w-[80%] p-7 border rounded-md shadow-md">
          <div className='w-1/2 space-y-3'>
            <div>
              <h2>First Name</h2>
              <input type="text" name="firstName" id="firstName" className='border w-full rounded-md px-2 py-1' />
            </div>
            <div>
              <h2>email</h2>
              <input type="text" name="email" id="email" className='border w-full rounded-md px-2 py-1' />
            </div>
            <div>
              <label for="Education" className='block'>Education</label>
              <select name="Education" id="Education" className='border w-full rounded-md px-2 py-1'>
                <option value="JSC">JSC</option>
                <option value="SSC">SSC</option>
                <option value="DIPLOMA">DIPLOMA</option>
              </select>
            </div>
            <div>
              <h2>Feedback</h2>
              <textarea name="feedback" id="feedback" className='border w-full rounded-md px-2 py-1'></textarea>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="trams" id="trams" className='w-5 h-5' />
                <label>I agree to terms and condition</label>
              </div>
            </div>
          </div>

          <div className='w-1/2 space-y-3'>
            <div>
              <h2>last Name</h2>
              <input type="text" name="lastName" id="lastName" className='border w-full rounded-md px-2 py-1' />
            </div>
            <div>
              <fieldset>
                <legend>Gender</legend>
                <div className='flex gap-3'>
                  <span>
                    <input type="radio" id="male" name="gender" value="male" className='mr-1' />
                    <label for="male">Male</label>
                  </span>
                  <span>
                    <input type="radio" id="female" name="gender" value="female" className='mr-1' />
                    <label for="female">Female</label>
                  </span>
                  <span>
                    <input type="radio" id="other" name="gender" value="other" className='mr-1' />
                    <label for="other">Other</label>
                  </span>
                </div>
              </fieldset>
            </div>
            <div>
              <h2>Number of PCs </h2>
              <div className="flex items-center gap-2">
                <button className='bg-blue-600 hover:bg-blue-700 flex items-center justify-center px-4 py-1 font-bold text-white rounded-md'>-</button>
                <div className='w-full border rounded-md text-center px-2 py-1'>0</div>
                <button className='bg-blue-600 hover:bg-blue-700 flex items-center justify-center px-4 py-1 font-bold text-white rounded-md'>+</button>
              </div>
            </div>
            <div className='flex justify-end mt-24'>
              <button className='bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded-md text-white font-semibold'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;