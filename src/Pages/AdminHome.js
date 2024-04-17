import styled from 'styled-components';

const AdminHome = () => {
  return (
    <StyledAdmin>
      <AdminBox>
        <AdminTitle><span>KUPHIL</span> Admin</AdminTitle>
      </AdminBox>
    </StyledAdmin>
  );
}

const StyledAdmin = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const AdminBox = styled.div`
  width: 270px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  box-sizing: border-box;
`;

const AdminTitle = styled.p`
  font-size: 34px;
  margin-bottom: 20px;
  & span{
    font-weight: bold;
  }
`;

export default AdminHome;